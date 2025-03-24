import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    };
  }
});

export default function App() {
  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log('NOTIFICATION RECEIVED');
        console.log(notification);
        const userName = notification.request.content.data.userName;
        console.log(userName);
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log('NOTIFICATION RESPONSE RECEIVED');
        console.log(response);
        const userName = response.notification.request.content.data.userName;
        console.log(userName);
      }
    );

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  /**
   *  Currently _BROKEN_ in Expo GO, workaround code below
   *
   *  [Expo issue#34782](https://github.com/expo/expo/issues/34782)
   */
  function scheduleNotificationHandler() {
    const d = Date.now(); // epoch time(ms), e.g. 1742476555404
    const date = d + 1000 * 5; // d + 1000ms * (n)S

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'My first local notification',
        body: 'This is the body of the notification.',
        data: { userName: 'Max' }
      },
      trigger: {
        date: new Date(date), // construct Date object
        /** required property */
        type: Notifications.SchedulableTriggerInputTypes.DATE
      }
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title='Schedule Notification'
        onPress={scheduleNotificationHandler}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
