import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'qp-calender-picker',
  templateUrl: './calender-picker.component.html',
  styleUrls: ['./calender-picker.component.scss']
})
export class CalenderPickerComponent implements OnInit {
  @Output('change') change = new EventEmitter();
  @Input('startsArr') startsArr;
  @Input('endsArr') endsArr;
  @Input('betweensArr') betweensArr;
  constructor() { }

  
  ngOnInit() {
    //------------- init arrays
      //--------------- to fill hours array to fill UI
      this.pushHours()
      //--------------- to fill hoursID array to get all ids
      this.pushHoursID();

      //-------------- fill booked time from db
      this.time = {...this.time, startsArr: this.startsArr , endsArr: this.endsArr , betweensArr: this.betweensArr}
      
  }
  hours = []
  hoursID = []

   time = {
    started : false,
    startWith : {startWith: '', value: ''},
    endWith : {endWith: '', value: ''},
    betweenThem : [],
    startsArr:[''],
    endsArr: [''],
    betweensArr: ['']
  }

  //--------------- to fill hours array to fill UI
  pushHours(){
    for(let i=0;i<=24;i++){
      if(i == 0){this.hours.push({id: i, hour:i, minA:'00',minC:'30', shift:'am', ckecked:false})}
      else if(i >= 1 &&  i<=12){
      this.hours.push({id: i, hour:i, minA:'00',minC:'30', shift:'am', ckecked:false})}
      else{
        this.hours.push({id: i, hour:i-12, minA:'00',minC:'30', shift:'pm', ckecked:false})}
    }
  }

  //--------------- to fill hoursID array to get all ids
  pushHoursID(){
    for(let i=0;i<=24;i++){
      this.hoursID.push(i.toString(), i+'30')
    }
  }
 
  
  //--------------- the first & second clicks
  
  startClick(e){
    if(!this.time.started){
      //--------------- first click select start hour
      const start = {startWith: e.target.parentElement.parentElement.id, value: e.target.value};
      this.time.startWith = start
      this.time.started = true
      document.getElementById(start.startWith).parentElement.parentElement.classList.add('qp-time.started')
      this.change.emit(this.time)

    } else if (this.time.started){
    //--------------- second click select end and between hours
      const end = {endWith: e.target.parentElement.parentElement.id, value: e.target.value};
      this.time.endWith = end;

      const startIndex = this.hoursID.indexOf(this.time.startWith.startWith)
      const endIndex = this.hoursID.indexOf(this.time.endWith.endWith);
      this.time.betweenThem = [];
      if(endIndex - startIndex != 0){
        for(let i = startIndex + 1; i < endIndex; i++){
          this.time.betweenThem.push(this.hoursID[i])
        }
      }
      this.change.emit(this.time)
    }
  }

  clear(){
    this.time.startWith={startWith: '', value: ''};
    this.time.started = false;
    this.time.endWith = {endWith: '', value: ''};
    this.time.betweenThem = [];
    this.change.emit(this.time)
  }

}
