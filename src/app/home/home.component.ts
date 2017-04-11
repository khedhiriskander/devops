/**
 * Created by Skander Khedhiri on 01/04/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Business} from "../shared/business.model";
import {RouterModule, Routes} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  /*business:Business;

  initialize() : void {
    this.business.name = "restaurant khalil ben hamouda";
    this.business.image = "image-link";
  }*/

  ngOnInit() {
    //this.initialize();
    console.log("Home Component frère !");
  }

}
