import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackMouseService {
  icon!:string
  src!:string
  color!:string
  constructor() { }
  setColor(color:string)
  {
    this.color=color
  } 
  getColor()
  {
    return this.color
  }
  setBackGround(src:string)
  {
    this.src=src
  }
  setMouse(icon:string)
  {
    this.icon=icon
  }
  getBackGround()
  {
    return this.src
  }
  getMouse()
  {
    return this.icon
  }
}
