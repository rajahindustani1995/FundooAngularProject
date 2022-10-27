import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetpasswordForm!: FormGroup;
  submitted = false;
  token: any;

  constructor(private formBuilder: FormBuilder, private user: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.forgetpasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required]
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token)
  }
  get f() { return this.forgetpasswordForm.controls; }

  onSubmit() {
    console.log(this.token);
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgetpasswordForm.valid) {
      //console.log("Password has been updated Successfully")
      let reqdata = {
        Password: this.forgetpasswordForm.value.password,
        newPassword: this.forgetpasswordForm.value.confirmpassword,
      }
      this.user.forgetpassword(reqdata, this.token).subscribe((response: any) => {
        console.log(response)

      }); //error => {
      //console.log(error)
    }

  }


}




