import { AuthBehaviourService } from './../auth-behaviour.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footers-component',
  templateUrl: './footers-component.component.html',
  styleUrls: ['./footers-component.component.css']
})
export class FootersComponentComponent implements OnInit {

  constructor(public authBehavior : AuthBehaviourService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authBehavior.login_user(false);
  }
}
