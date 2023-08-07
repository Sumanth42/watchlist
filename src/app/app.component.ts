import { Component, OnInit } from '@angular/core';
import {WatchlistSerivce} from './shared/watchlist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CodeSandbox';
  label = 'Sign Up';
  showSignup = false;
  currentName:string='';
  users:any[]=[];
  user:{}|undefined;
  unameverified=false;
  custom:string='password';
  helperText:string='';
  showKey=false;
  mySet = new Set();
  constructor(private watchlistservice:WatchlistSerivce){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.watchlistservice.firestoreCollection.valueChanges({idField:'id'}).subscribe(element=>{
    //   this.users=element;
    //   // console.log(this.users);
    //   this.fillSet();
    // })    
  }
  fillSet(){
    this.users.forEach(user => {
      this.mySet.add(user.user.username.toLowerCase());
    });
    console.log(this.mySet);
  }
  toggle() {
    this.showSignup = !this.showSignup;
  }
  validateusername(cname:string){
    cname=cname.toLowerCase();
    if(cname.length<5){
      this.helperText='username should contain minimum 5 characters';
    }
    else if(this.mySet.has(cname)){
      this.unameverified=false;
      this.helperText='username already exists please try another one';
    }
    else{
      this.helperText='';
      this.unameverified=true;
    }
  }
  toggleShow(){
    this.showKey=!this.showKey;
    if(this.custom=='password'){
      this.custom='text';
    }
    else{
      this.custom='password';
    }
  }
  register(username:string,password:string){
    this.user={
      username:username,
      key:password
    }
    this.watchlistservice.addItem(this.user);
    console.log(this.user);
  }
}
