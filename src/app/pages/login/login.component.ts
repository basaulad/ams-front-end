import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RouterLink, RouterModule } from '@angular/router';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{


 loginForm: FormGroup;

 constructor(private formBuilder: FormBuilder,
  private userService: UserService,
  private router: Router) {}

 ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  })
}

login(): void{
  const user = this.loginForm.value;
  this.userService.login(user).subscribe((user: User) => {
    if(user.email) {
      this.router.navigate(['listings']);
    }else{
      alert('Invalid email or password');
    }
  })
}
}