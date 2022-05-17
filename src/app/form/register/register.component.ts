import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.formBuilder.group({
    username:['',Validators.required],
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.required]
  })
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let username = this.registerForm.controls["username"].value;
    let email = this.registerForm.controls["email"].value;
    let password = this.registerForm.controls["password"].value;
    this.authService.register(username, email, password).subscribe((data) => {
      console.log("response", data);
    }, error => {
      console.log("error", error)
    })

    this.router.navigate(['login']);
  }
}
