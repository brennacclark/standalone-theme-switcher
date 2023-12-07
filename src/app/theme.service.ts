import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new BehaviorSubject<string>('theme-light');

  loadInitialTheme() {
    const storedTheme = localStorage.getItem('theme-color') || 'theme-light';
    this.theme.next(storedTheme);
  }

  getTheme() {
    return this.theme.asObservable();
  }

  setTheme(newTheme: string) {
    this.theme.next(newTheme);
    localStorage.setItem('theme-color', newTheme);
  }
}
