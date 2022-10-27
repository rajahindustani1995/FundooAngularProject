import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from 'src/app/Services/dataService/data.service';
import { LabelNoteComponent } from '../label-note/label-note.component';
import { MatDialog } from '@angular/material/dialog';
import { LabelService } from 'src/app/Services/labelService/label.service';
import { LabelDataService } from 'src/app/Services/label-dataService/label-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  show : boolean = false;
  LabelList:any=[]
  labelName:any; 
  Label:any; 
  subscription!: Subscription;
  
  

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ,private route: Router,
    private dataService: DataService,public dialog: MatDialog , public label : LabelService,
    private labeldata : LabelDataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnDestroy():void{
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.getallLabels()

    this.subscription = this.labeldata.labelList.subscribe(Label => this.Label = Label)

  //  this.subscription = this.dataService.viewList.subscribe(View => this.show = View )

  }

  searchNotes(event:any){
    console.log("noteSerach Dashboard",event.target.value)
    this.dataService.changeMessage(event.target.value)

  }

  LogOut(){
    console.log("stored: "+localStorage.getItem('token'));
    
    localStorage.removeItem('token');
    console.log("Deleted: "+ localStorage.getItem('token'));
    this.route.navigateByUrl('/login')
  }

  getallLabels()
  {
    this.label.getallLabels().subscribe((result:any) => {
      console.log(result);
      this.LabelList = result.data
      //console.log(this.LabelList);
      this.LabelList.reverse();
      console.log("LabelList", this.LabelList);
      //console.log(this.LabelList);
      this.labeldata.addLabel(this.LabelList);
    });
  } 

  openDialog(): void {
    const dialogRef = this.dialog.open(LabelNoteComponent, {
      //width: '250px',
      data: this.LabelList
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ChangeView(){
    this.show = !this.show;
    this.dataService.viewNote(this.show);
  }
  // changeView1(){
  //   this.show=false;
  //     this.dataService.viewNote('column')
  //   // if (this.show==true){
  //   //   this.show=false;
  //   //   this.dataService.viewNote('column')
  //   // }
  //   // else{
  //   //   this.show=true;
  //   //   this.dataService.viewNote('row')
  //   // }
  // }

  // changeView2(){
  //   this.show=false;
  //     this.dataService.viewNote('row')
  //  }
}
