import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import{ AuthService } from '../auth.service';
import { format } from 'util';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  message: string= "";
  userError: any;

  constructor(public fb: FormBuilder, public authService: AuthService) {

    this.myForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]]
    },{
      validator: this.checkIfMatchingPasswords("password", "confirmPassword")
    })
   }

  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string){
    return(group: FormGroup)=>{
      let password = group.controls[passwordKey];
      let confirmPassword= group.controls[confirmPasswordKey];

      if(password.value == confirmPassword.value){
        return;
      }else{
        confirmPassword.setErrors({
          notEqualToPassword: true
        })
      }
    }
  }

  onSubmit(signUpForm)
{
  // console.log(signUpForm.value);
  let email: string = signUpForm.value.email;
  let password: string = signUpForm.value.password;
  let firstName: string = signUpForm.value.firstName;
  let lastName: string = signUpForm.value.lastName;

  this.authService.signup(email, password, firstName, lastName)
    .then((user: any)=>{
          firebase.firestore().collection("users").doc(user.uid)
          .set({
            firstName: signUpForm.value.firstName,
            lastName: signUpForm.value.lastName,
            email: signUpForm.value.email,
            photoURL: user.photoURL,
            interests: "",
            bio: "",
            hobbies: ""
          })
          .then(()=>{
            this.message="You have signed In successfully!"
          })
        })

    .catch((error)=>{
      console.log(error);
      this.userError = error;
    })
}
  ngOnInit() {
  }

}
