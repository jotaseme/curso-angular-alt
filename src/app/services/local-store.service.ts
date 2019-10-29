import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  constructor() { }

  getItem = (key) => JSON.parse(localStorage.getItem(key)) || [];
  setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  removeItem = (key) => localStorage.removeItem(key);
  clear = () => localStorage.clear();
}
