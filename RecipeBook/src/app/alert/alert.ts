import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: false,
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {
@Input() message = '';
@Output() close = new EventEmitter<void>();

onClose(){
  this.close.emit();
}
}
