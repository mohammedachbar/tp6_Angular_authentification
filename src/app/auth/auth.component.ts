import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})

export class AuthComponent {
    private login: string;
    private pass: string;
    private isLoggedIn = false;
    data: any = null;

    constructor(private _http: HttpClient) {
    }

    onSubmit() {
      // vérification
      this._http.get('http://localhost:8080/ProjetRest/rest/r1/m2/' + this.login + '/' + this.pass)
                  .subscribe(data => {
                        this.data = data;
                        console.log(this.data);
                  });
        this.isLoggedIn = this.data.logged;

    }

    logout() {
      this.isLoggedIn = false;
    }
  }
