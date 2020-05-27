import { Injectable } from '@angular/core';
import *as firebase from 'firebase/app';
import 'firebase/auth';
import { resolve, reject } from 'q';

@Injectable({         //this decorator is converting the simple AuthService Typescript class into an angular Service
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string , password: string){
    return firebase.auth().signInWithEmailAndPassword(email,password);  //bcoz we want to return promise from login function
  }

  signup(email: string, password:string, first_name:string, last_name:string){
    return new Promise((resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response)=>{
          let randomNumber = Math.floor(Math.random()*1000);  
          response.user.updateProfile({
          displayName: first_name+" "+last_name,
          photoURL: "https://api.adorable.io/avatars/"+randomNumber
        })
          .then(()=>{
            resolve(response.user);
          })
          .catch((error)=>{
            reject(error);
          })
        })
    .catch((error)=>{
      reject(error);
    })
    })
  }
}
