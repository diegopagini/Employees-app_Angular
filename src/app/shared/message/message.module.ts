import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MessageComponent],
})
export class MessageModule {}
