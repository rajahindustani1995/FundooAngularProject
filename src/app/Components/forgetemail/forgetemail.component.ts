import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-forgetemail',
  templateUrl: './forgetemail.component.html',
  styleUrls: ['./forgetemail.component.scss']
})
export class ForgetemailComponent implements OnInit {
  forgetemailForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.forgetemailForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    })
  }
  get f() { return this.forgetemailForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.forgetemailForm.value)
    // stop here if form is invalid
    if (this.forgetemailForm.valid) {
      console.log("Request for recovary email has been sent Successfully")
      let reqdata ={
        Email: this.forgetemailForm.value.email,
      }
      this.user.forgetemail(reqdata).subscribe((response:any) => {
        console.log(response)

      }, error => {
        console.log(error)
      }
      )
    }
  }

}
