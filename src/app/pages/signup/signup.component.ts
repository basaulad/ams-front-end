import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router){}

    ngOnInit(): void {
      console.log('component initialized');
      this.signupForm = this.formBuilder.group({
        fullname: [''],
        email: [''],
        password: ['']
      })
    }

    signup(): void {
      const user = this.signupForm.value;
      this.userService.signup(user).subscribe((result: string) => {
        if(result === 'success') {
          this.router.navigate(['login']);
        }else{
          alert('Unable to register user!, please try again')
        }
      })
    }
}
