import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-picker-example';
  time = {}

  startsArr= ['3','2130'];
  endsArr= ['530','23'];
  betweensArr= ['330','4','430','5','2230','22'];

  changeTimePicker(time){
    this.time = time;
  }
}
