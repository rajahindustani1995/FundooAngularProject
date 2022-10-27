import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.valid) {
      console.log("Login Successful")
      let reqdata ={
        Email: this.loginForm.value.email,
        Password: this.loginForm.value.password,
      }
      this.user.login(reqdata).subscribe((response:any) => {
        console.log(response)
        localStorage.setItem("token",response.data)
        this.router.navigateByUrl("dashboard/notes");
      }, error => {
        console.log(error)
      }
      )
    } 
  }

}
