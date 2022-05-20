import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
    password:['',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
      Validators.pattern('.*\\d+.*')
    ]]
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

  get Username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get Password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
}
