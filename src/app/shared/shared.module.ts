import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from './message/message.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MessageModule],
  exports: [MessageModule],
})
export class SharedModule {}
