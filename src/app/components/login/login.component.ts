import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('email'),
      password: new FormControl('password')
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {

      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.router.navigate(['admin'])
        },
        error: (err: Error) => {
          alert(err.message)
        },
      })
    }
  }
}
