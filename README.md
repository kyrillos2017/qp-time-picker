# TimePicker

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

# links
[github] (https://github.com/kyrillos2017/qp-time-picker)
[Demo] (https://stackblitz.com/edit/angular-ivy-prd7ma?embed=1&file=src/index.html)

# Usage with Angular CLI
Step 1:
```
npm i qp-time-picker
```
Step 2: add this to your `app.module`
```
import { TimePickerModule } from 'qp-time-picker';
```
Step 3: add `TimePickerModule` to your `imports` array


Step 4: add your `HTML` to your `component.html`
```
<qp-calender-picker [startsArr]="startsArr" [betweensArr]="betweensArr" [endsArr]="endsArr" (change)="changeTimePicker($event)"></qp-calender-picker>
```
Step 5: add to your `component.ts`
```
  time = {} //----------- time object get time details from
  data: any[];
  startsArr= ['']; //------------ array of hours id that are locked with start flag
  endsArr= ['']; //------------ array of hours id that are locked with end flag
  betweensArr= ['']; //------------ array of hours id that are locked with between flag

  ressval;
  changeTimePicker(time) {
    this.time = time;
    let resTime: any[] = []
    this.ress = resTime = [time.startWith.startWith, time.endWith.endWith, ...time.betweenThem]
    this.ressval = resTime = [time.startWith.value, time.endWith.value]
    let empty = resTime.indexOf('')
    resTime.slice(empty, 1)
  }
  ```
Step 6: `"./node_modules/bootstrap/dist/css/bootstrap.min.css"` to your `angular.json`
or import `bootstrap CDN link` to your `index.html`
