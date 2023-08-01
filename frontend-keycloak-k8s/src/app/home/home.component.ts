import { Component, Input, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = ''
  isLogging = true;
  constructor(
    private messageService: MessageService
    //private oauthService: OAuthService
    ) { }

  ngOnInit(): void {
    // this.username = this.oauthService.getIdentityClaims()['preferred_username']
    this.messageService.getMessage().subscribe(res => {
      this.username = res.text;
      this.isLogging = false;
    },
     err => console.log(err)
    )
  }

}
