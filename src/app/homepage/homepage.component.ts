import { Component, OnInit } from '@angular/core';
import { BackMouseService } from '../back-mouse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  constructor(private service:BackMouseService,public router:Router)
  {}
  ngOnInit(): void {
    this.iterations();

  }
  src:string=""
  icon:string=""
  times: number[] = [];
  isSkyBlue:boolean=false
  brown:boolean=false
  displayImage(type:string)
  {
    if(type=='cat')
    {
      this.src = 'assets/images/cat_background.png'
      console.log(this.src)
      this.isSkyBlue=false
      this.brown=true
    }
    else if(type=='pony')
    {
      this.src = 'assets/images/lilpony.png'
      console.log(this.src)
      this.isSkyBlue=true
      this.brown=false

    }
    else{
      this.src = 'assets/images/dino.png'
      console.log(this.src)
      this.brown=false
      this.isSkyBlue=false
    }
    this.service.setBackGround(this.src)
  }
  displayIcon(type:string)
  {
    if(type=='cat')
    {
      this.icon = 'assets/images/cat.png'
      console.log(this.icon)
    }
    else if(type=='pony')
    {
      this.icon = 'assets/images/pony_mouse.png'
      console.log(this.icon)
    }
    else{
      this.icon = 'assets/images/dino_mouse.png'
      console.log(this.icon)
    }
    this.service.setMouse(this.icon)
  }
  route()
  { if(this.isSkyBlue)
    {
      this.service.setColor('navy')
    }
    else if(this.brown)
      {
        this.service.setColor('#94624B')
      }
    else{
      this.service.setColor('black')
    }
    this.router.navigateByUrl('/questions')
  }
  iterations() {
   
      this.times = Array.from({ length: 12 }, (_, i) => i);
  }
}
