import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-picker-example';
  time = {}

  // startsArr= ['3','2130'];
  // endsArr= ['530','23'];
  // betweensArr= ['330','4','430','5','2230','22'];
  lockedRooms: String[] = [''];
  data: any[];
  startsArr= [''];
  endsArr= [''];
  betweensArr= [''];

ress;
ressval;
  changeTimePicker(time) {
    this.time = time;
    let resTime: any[] = []
    this.ress = resTime = [time.startWith.startWith, time.endWith.endWith, ...time.betweenThem]
    this.ressval = resTime = [time.startWith.value, time.endWith.value]
    let empty = resTime.indexOf('')
    resTime.slice(empty, 1)
    this.lockedRooms = []
  }
}
