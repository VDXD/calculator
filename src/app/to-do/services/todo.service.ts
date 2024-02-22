import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  saveData(key: string, data: any) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      console.error('localStorage is not available.');
    }
  }

  getData(key: string) {
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } else {
      console.error('localStorage is not available.');
      return null;
    }
  }

  removeData(key: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key);
    } else {
      console.error('localStorage is not available.');
    }
  }
}
