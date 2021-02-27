import {AfterContentInit, Component, Inject, OnInit} from '@angular/core';;
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';


@Component({
  selector: 'app-dialog-comic',
  templateUrl: './dialog-comic.component.html',
  styleUrls: ['./dialog-comic.component.css']
})
export class DialogComicComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


}
