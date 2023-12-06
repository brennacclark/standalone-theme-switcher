import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Standalone Theme Switcher';

  theme = 'theme-light';

  constructor() {}

  ngOnInit(): void {
    this.theme = localStorage.getItem('theme-color') || 'theme-light';
  }

  onThemeChanged(newTheme: string) {
    // Update the theme in local storage

    this.theme = newTheme;
    localStorage.setItem('theme-color', this.theme);
  }
}
