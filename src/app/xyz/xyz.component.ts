import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})

export class XyzComponent implements OnInit {

  public username: string;

  constructor() { }

  ngOnInit(): void {
  }

}
