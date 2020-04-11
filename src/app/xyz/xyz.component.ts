import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})

export class XyzComponent implements OnInit {

  public username: string;
  public password: string;

  constructor() { }

  ngOnInit(): void {
  }

  public login() {
//
  }

}
