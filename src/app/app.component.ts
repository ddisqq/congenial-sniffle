import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  totalAngularPackages;
  coinBase;

  constructor(private http: HttpClient) {}

  //   CB-ACCESS-KEY The api key as a string.
  // CB-ACCESS-SIGN The base64-encoded signature (see Signing a Message).
  // CB-ACCESS-TIMESTAMP A timestamp for your request.
  // CB-ACCESS-PASSPHRASE The passphrase you specified when creating the API key.

  ngOnInit() {
    //SET Headers
    // httpOptions.headers = httpOptions.headers.set(
    //   'Authorization',
    //   'my-new-auth-token'
    // );
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    const requestOptions = {
      headers: new Headers(headerDict),
    };

    var apiUrl = 'https://api-public.sandbox.pro.coinbase.com';

    // Simple GET request with response type <any>
    this.http
      .get<any>('https://api.npms.io/v2/search?q=scope:angular')
      .subscribe((data) => {
        this.totalAngularPackages = data.total;
      });

    this.http.get<any>(apiUrl).subscribe((data) => {
      this.coinBase = data.total;
    });

    console.log(this.coinBase);
  }
}
