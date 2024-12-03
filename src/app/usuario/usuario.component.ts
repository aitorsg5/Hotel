import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { viajero } from '../models/viajero';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  @Input() viajeroData: viajero | null = null;
  @Output() onEdit = new EventEmitter<viajero>();
  @Output() onDelete = new EventEmitter<number>();

  ngOnInit(): void {
    console.log('UsuarioComponent inicializado con datos:', this.viajeroData);
  }

  editarViajero(): void {
    if (this.viajeroData) {
      this.onEdit.emit(this.viajeroData);
    }
  }

 }
