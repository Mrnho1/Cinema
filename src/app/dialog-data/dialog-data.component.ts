import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})
export class DialogDataComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent> ,
    private router: Router
  ) {} 

  

  cancelar(): void {
    this.dialogRef.close();
  }
}
