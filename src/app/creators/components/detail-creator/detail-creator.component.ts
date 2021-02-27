import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AllCreators} from '../../interfaces/all-creators';
import { CreatorService } from '../../services/creator.service';
import {DialogCreatorComponent} from '../dialog-creator/dialog-creator.component';

@Component({
  selector: 'app-detail-creator',
  templateUrl: './detail-creator.component.html',
  styleUrls: ['./detail-creator.component.css']
})
export class DetailCreatorComponent implements OnInit, AfterContentInit{

  public creator: Observable<AllCreators[] | null>
  private id: number;
  constructor(private creatorService:CreatorService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
    activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.creator = this.creatorService.getCreator(this.id);
  }
  ngAfterContentInit() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogCreatorComponent,{
      data: this.creator,
    });

    dialogRef.afterClosed().subscribe(result => {
      //redirect
      this.router.navigate(['/creators']).then(resp => {
      }).catch(err => {
        console.log('error->', err)
      });
    });
  }
}
