import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new Login('', '');

  constructor(
    private authService: AuthService,
    private storage: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  showRecoverForm() {
    alert('will go to recover page');
  }
  
  toSignUp() {
    alert('will go to sign up page');
  }

  onSubmit(): void {
    this.authService.login(this.login).subscribe(res => {
      if (res) {
        const data = res.data;
        this.storage.storeToken(data.token);
        this.router.navigate([this.storage.getNextUrl()]);
      }
    },
    err => console.log(err));
  }

}
