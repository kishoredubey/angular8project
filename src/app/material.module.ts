import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog'

import {  MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'

import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule]
})
export class MaterialModule {}