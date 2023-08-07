import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input()
  buttonLabel!: string;
  @Output() customEvent = new EventEmitter<void>();
  Event() {
    this.customEvent.emit();
  }
}
