import { NgModule } from '@angular/core';
import { TimePickerComponent } from './time-picker.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CalenderPickerComponent } from './components/calender-picker/calender-picker.component';



@NgModule({
  declarations: [TimePickerComponent, CalenderPickerComponent],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [TimePickerComponent,CalenderPickerComponent]
})
export class TimePickerModule { }
