import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() theme = 'theme-light';
  @Output() themeChanged: EventEmitter<string> = new EventEmitter<string>(); // Create an EventEmitter

  title = 'Standalone Theme Switcher';

  constructor() { }

  ngOnInit(): void {}

  setTheme(newTheme: string) {
    this.theme = newTheme;
    this.themeChanged.emit(this.theme);
  }
}
