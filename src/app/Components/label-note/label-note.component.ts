import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from 'src/app/Services/labelService/label.service';

@Component({
  selector: 'app-label-note',
  templateUrl: './label-note.component.html',
  styleUrls: ['./label-note.component.scss']
})
export class LabelNoteComponent implements OnInit { 

  labelForm!: FormGroup
  

  constructor(public dialogRef: MatDialogRef<LabelNoteComponent>, public label: LabelService,
    @Inject(MAT_DIALOG_DATA) public data: any ,private formBuilder: FormBuilder) {
      
  }

  ngOnInit(): void {
    this.labelForm= this.formBuilder.group({
      labelName:['', Validators.required],
    })
   
  }

  onSubmit(): void {
   }
  
   CreateLabel(){
    let reqdata ={
      labelName:this.labelForm.value.labelName
    }
    this.label.createLabel(reqdata).subscribe((response:any) => {
      console.log(response)
    })
    
   }
}


