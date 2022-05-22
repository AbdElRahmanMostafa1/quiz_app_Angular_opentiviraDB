import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() QuesAmount?: string = '';
  @Input() inputLabel?: string;
  @Output() inputChange = new EventEmitter<any>();

  changeAmountHandler(e: any) {
    this.inputChange.emit(e.value);
  }

  ngOnInit(): void {}
}
