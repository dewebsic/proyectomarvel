import {AfterContentInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit, AfterContentInit {

  public windowWidth: string;
  public bgNa :string;
  public showSplash: boolean = true;

  constructor() { }

  ngOnInit() {
    this.animationMarvel();
  }

  ngAfterContentInit() {
    this.animationScreen();
  }

  animationMarvel(){
    let bgNum: number = 0;
    const interval = setInterval(() => {
        bgNum = (bgNum % 23) + 1;
       this.bgNa = `url(../../../assets/images/marvel/${bgNum}.jpg)`;
    },130)

    setTimeout(function(){
      clearInterval(interval);
    },9000)
  }

  animationScreen(){
    setTimeout(() => {
      this.windowWidth = "-" + window.innerWidth + "px";
      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 9000);
  }
}
