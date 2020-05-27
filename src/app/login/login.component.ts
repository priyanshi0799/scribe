import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import{ AuthService } from '../auth.service';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) {      //dependency injection as AuthService is a dependency on wc
    this.myForm=this.fb.group({                                               //our login component is dependent
      email: ['',[Validators.email, Validators.required]],
      password: ['',Validators.required]
    })

  }

  onSubmit(form){
    this.authService.login(form.value.email, form.value.password) //returns promises
      .then((data)=>{
        console.log(data);
        this.message="You have been logged in successfully."
        this.router.navigate(['/myblogs'])
      })
      .catch((error)=>{
        console.log(error);
        this.userError = error;
      })
  }

  ngOnInit() {
  }

}
