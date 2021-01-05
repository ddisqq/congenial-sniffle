import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  totalAngularPackages;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    var redirect =
      'https://www.coinbase.com/oauth/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URL&state=SECURE_RANDOM&scope=wallet:accounts:read';
    var redirect2 =
      'https://www.coinbase.com/oauth/authorize?response_type=code&client_id=1532c63424622b6e9c4654e7f97ed40194a1547e114ca1c682f44283f39dfa49&redirect_uri=https%3A%2F%2Fexample.com%2Foauth%2Fcallback&state=134ef5504a94&scope=wallet:user:read,wallet:accounts:read';

    var website = 'https://api.pro.coinbase.com';
    var apiUrl = 'https://api-public.sandbox.pro.coinbase.com';
    this.http
      .get<any>('https://api.npms.io/v2/search?q=scope:angular')
      .subscribe((data) => {
        this.totalAngularPackages = data.total;
      });

    // https://api.pro.coinbase.com

    // 3 requests per second, up to 6 requests per second in bursts. Some endpoints may have custom rate limits.
  }
}

// Status Code	Reason
// 400	Bad Request -- Invalid request format
// 401	Unauthorized -- Invalid API Key
// 403	Forbidden -- You do not have access to the requested resource
// 404	Not Found
// 500	Internal Server Error -- We had a problem with our server

// PRIVATE ENDPOINTS
// We throttle private endpoints by profile ID: 5 requests per second, up to 10 requests per second in bursts. Some endpoints may have custom rate limits.

// FINANCIAL INFORMATION EXCHANGE API
// The FIX API throttles the number of incoming messages to 50 commands per second. A maximum of 5 connections can be established per profile.

// Websocket Feed
// wss://ws-feed-public.sandbox.pro.coinbase.com

// FIX API
// tcp+ssl://fix-public.sandbox.pro.coinbase.com:4198

//   Authorize URL: https://www.coinbase.com/oauth/authorize
// Access Token URL: http://www.coinbase.com/oauth/token
