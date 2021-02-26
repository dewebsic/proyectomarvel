import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-character',
  templateUrl: './dialog-character.component.html',
  styleUrls: ['./dialog-character.component.css']
})
export class DialogCharacterComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
