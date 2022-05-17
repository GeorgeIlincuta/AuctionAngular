import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let email = this.loginForm.controls["email"].value;
    let password = this.loginForm.controls["password"].value;
    
    this.authService.login(email, password).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.router.navigate(['/']);
    })
    
  }

}
