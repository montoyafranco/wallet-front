import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../servicios/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router,private user:UserService) { }

  ngOnInit() {
  }

  onClick(){
    this.auth.loginWithGoogle()
   .then(response => {
   console.log(response)
   this.router.navigate(['/home']);
   this.user.newUser()
   })

   .catch(error=> console.log(error))
     }


}
