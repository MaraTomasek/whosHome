import {Component, Input, OnInit} from '@angular/core';
import {User} from "../model/user.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
