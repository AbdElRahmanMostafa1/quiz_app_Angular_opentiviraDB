import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  constructor() {}

  @Input() labelTitle?: string;
  @Input() SelectOptionsArray?: { name: string; id: string }[] = [];
  @Input() selectedOption?: string = '';

  ngOnInit(): void {}

  @Output() getValue = new EventEmitter<string>();

  getSelectedValue() {
    this.getValue.emit(this.selectedOption);
  }
}
