import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ColabService } from 'src/app/Services/collabeService/colab.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  colabList:any
  collaboratorID:any
  collaboratorEmail:any
  reqdata:any
  colabForm!: FormGroup
  colabArray:any=[];
  // control = new FormControl;
  // filteredColabArray!: Observable<[]>;

  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  private colab: ColabService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.colabForm= this.formBuilder.group({
      collaboratorEmail:['', Validators.required],
    })
    this.getColab()

    // this.filteredColabArray = this.control.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this.filter(value || '')),
    // );
    this.GetAllColabe()
  }

  // private filter(value: any): any {
  //     const filterValue = this.normalizeValue(value);
  //     return this.colabArray.filter((colabarray: any) => this.normalizeValue(colabarray).includes(filterValue));
  // }
  // private normalizeValue(value: any): any {
  //     return value;
  // }

  GetAllColabe(){

    this.colab.getallColab().subscribe((result:any) => {
      console.log(result);
      this.colabArray = result.data
      
      console.log("All Collaborator List", this.colabArray);
      
    });
  
  }

  

  CreateColab(){
    let reqdata = {
      notesID:this.data.notesID,
      collaboratorEmail: this.colabForm.value.collaboratorEmail,
    }
    console.log(reqdata)
    this.colab.createColab(reqdata).subscribe((response:any) => {
      console.log(response)
    })
    
   }

  getColab()
  {
    //console.log(this.data.notesID)
    this.colab.retrieveColab(this.data.notesID).subscribe((result:any) => {
      console.log(result);
      this.colabList = result.data
      console.log("ColabList", this.colabList);
      
    });
  }

  
  DeleteColab(ColabeData:any){
    console.log(ColabeData.collaboratorID);
    
    this.colab.deleteColab(ColabeData.collaboratorID).subscribe((response: any) => {
      console.log("Label Deleted Successfully", response);
    }, (error: any) => {
      console.log(error);
    })

  }
}
