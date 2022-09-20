import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
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
