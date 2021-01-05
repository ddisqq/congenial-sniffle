import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CoinbasePro } from 'coinbase-pro-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  totalAngularPackages;
  coinBase;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    var auth = {
      apiKey:
        'Dt3u26EB9u8NyWMJ2UF3DNn1oTCDhf2OuOhaXhZJyr/ZW4JNVPqoaTXgarSEa3L1dTn3+iinh1hJHBwsT7vIDQ==',
      apiSecret: '71disque',
      passphrase: '71disque',
      // The Sandbox is for testing only and offers a subset of the products/assets:
      // https://docs.pro.coinbase.com/#sandbox
      useSandbox: true,
    };

    // // var client = new CoinbasePro(auth);

    // client.rest.account.listAccounts().then((accounts) => {
    //   const message = `You can trade "${accounts.length}" different pairs.`;
    //   console.log(message);
    // });
    // console.log(client.rest);
    // console.log(client.url);
    // console.log(client.ws);
    var apiUrl = 'https://api-public.sandbox.pro.coinbase.com';
    this.http
      .get<any>('https://api.npms.io/v2/search?q=scope:angular')
      .subscribe((data) => {
        this.totalAngularPackages = data.total;
      });
    this.http.get<any>(apiUrl).subscribe((data) => {
      this.coinBase = data.total;
    });
    console.log(this.coinBase);
    // var secret = 'PYPd1Hv4J6/7x...';
    // var timestamp = Date.now() / 1000;
    // var requestPath = '/orders';
    // var body = JSON.stringify({
    //   price: '1.0',
    //   size: '1.0',
    //   side: 'buy',
    //   product_id: 'BTC-USD',
    // });

    // // var holdHmac = hmac.update(what).digest('base64');
    // var timestamp = Date.now() / 1000;
    // var method = 'POST';
    // var what = timestamp + method + requestPath + body;
    // var key = new Buffer('71disque', 'base64');

    // var hmac = require('crypto')
    //   .createHmac('SHA256', key)
    //   .update('MESSAGE')
    //   .digest('base64');
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'CB-ACCESS-KEY':
    //     'Dt3u26EB9u8NyWMJ2UF3DNn1oTCDhf2OuOhaXhZJyr/ZW4JNVPqoaTXgarSEa3L1dTn3+iinh1hJHBwsT7vIDQ==',
    //   'CB-ACCESS-SIGN': holdHmac.toString(),
    //   'CB-ACCESS-TIMESTAMP': timestamp.toString(),
    //   'CB-ACCESS-PASSPHRASE': '71disque',
    // };
    // const requestOptions = {
    //   headers: new Headers(headerDict),
    // };
  }
}
