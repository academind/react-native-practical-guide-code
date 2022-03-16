import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://react-native-course-3cceb-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}
