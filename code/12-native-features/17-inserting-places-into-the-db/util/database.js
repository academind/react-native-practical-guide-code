/** EXPO-SQLITE - ~15.1.2 */
import * as SQLite from 'expo-sqlite';

import { Place } from '../models/place';

const database = SQLite.openDatabaseSync('places.db');

export function init() {
  return database.runAsync(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
        )
    `);
}

export function insertPlace(place) {
  return database.runAsync(
    `
            INSERT INTO places (title, imageUri, address, lat, lng)
            VALUES (?, ?, ?, ?, ?)
        `,
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng
    ]
  );
}
