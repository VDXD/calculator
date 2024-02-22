import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  saveData(key: string, data: any) {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      console.error('localStorage is not available.');
    }
  }

  getData(key: string) {
    if (this.isLocalStorageAvailable()) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } else {
      console.error('localStorage is not available.');
      return null;
    }
  }

  removeData(key: string) {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(key);
    } else {
      console.error('localStorage is not available.');
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
