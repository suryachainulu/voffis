import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   UserName = localStorage.getItem('user');
  constructor() { }

  ngOnInit(): void {
  }


}
