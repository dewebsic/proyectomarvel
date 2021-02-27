import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-creator',
  templateUrl: './dialog-creator.component.html',
  styleUrls: ['./dialog-creator.component.css']
})
export class DialogCreatorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
