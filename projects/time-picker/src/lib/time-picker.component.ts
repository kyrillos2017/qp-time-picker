import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qp-time-picker',
  templateUrl: 'time-picker.component.html',
  styleUrls: ['time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //------------- init arrays
      //--------------- to fill hours array to fill UI
      this.pushHours()
      //--------------- to fill hoursID array to get all ids
      this.pushHoursID()
  }
  hours = []
  hoursID = []
  startWith;
  started = false;
  endWith = '';
  betweenThem = [];

  //--------------- to fill hours array to fill UI
  pushHours(){
    for(let i=0;i<=24;i++){
      if(i == 0){this.hours.push({id: i+120, hour:i, minA:'00',minC:'30', shift:'am', ckecked:false})}
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
  // pushHours(){
  //   for(let i=0;i<=24;i++){
  //     if(i == 0){this.hours.push({id: i+120, hour:i, minA:'00',minB:'15',minC:'30',minD:'45', shift:'am', ckecked:false})}
  //     else if(i >= 1 &&  i<=12){
  //     this.hours.push({id: i, hour:i, minA:'00',minB:'15',minC:'30',minD:'45', shift:'am', ckecked:false})}
  //     else{
  //       this.hours.push({id: i, hour:i-12, minA:'00',minB:'15',minC:'30',minD:'45', shift:'pm', ckecked:false})}
  //   }
  // }
  
  //--------------- the first & second clicks
  startClick(e){

    if(!this.started){
      //--------------- first click select start hour
      const start = e.target.id;
      this.startWith = start
      this.started = true
      document.getElementById(start).parentElement.parentElement.classList.add('qp-started')
    } else if (this.started){
    //--------------- second click select end and between hours
      const end = e.target.id;
      this.endWith = end;

      const startIndex = this.hoursID.indexOf(this.startWith)
      const endIndex = this.hoursID.indexOf(this.endWith)

      for(let i = startIndex + 1; i < endIndex; i++){
        this.betweenThem.push(this.hoursID[i])
        
      }
    }
  }

  //--------------- first click select whole hour
  fixClick(e){
    if(!this.started){
      const start = e.target.parentElement.firstElementChild.id
      this.startWith = start
      this.started = true
      e.target.parentElement.classList.add('qp-red')
    }
  }

  //--------------- hovers
  enter(e){
    e.target.parentElement.classList.add('qp-hover')
  }

  leave(e){
    e.target.parentElement.classList.remove('qp-hover')
  }

  clear(){
    this.startWith='';
    this.started = false;
    this.endWith = '';
    this.betweenThem = [];
    document.querySelector('.qp-hour.qp-red').classList.remove('qp-red')
  }
}
