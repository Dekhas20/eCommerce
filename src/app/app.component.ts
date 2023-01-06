import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { TokenService } from './services/token.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'ecommerce';
  imgParent = '';

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    const token = this.tokenService.getToken()
    this.storeService.getCartLocalStorage()
    if(token){
      this.authService.profile().subscribe()
    }

  }

  onloaded(img: string) {
    console.log(img);
  }


}
