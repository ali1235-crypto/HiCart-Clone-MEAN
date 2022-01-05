import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accedit',
  templateUrl: './accedit.component.html',
  styleUrls: ['./accedit.component.css']
})
export class AcceditComponent implements OnInit {

  openpass=false


  faCheck=faCheck


  constructor() { }


  ngOnInit(): void {
  }


  uncheck() {
    this.openpass=!this.openpass
}
}
