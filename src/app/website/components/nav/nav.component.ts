import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../../services/store.service';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';
import { CategoriesService } from '../../../services/categories.service';
import { User } from 'src/app/models/user.model';
import { Category } from 'src/app/models/product.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter = 0;
  profile: User | null = null;
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.getAllCategories();
    this.authService.user$.subscribe((data) => (this.profile = data));
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  // createUser() {
  //   this.userService
  //     .create({
  //       name: 'Diego',
  //       email: 'diegoaec20@gmail.com',
  //       password: '123456',
  //     })
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['/home']);
  }

  getAllCategories() {
    this.categoriesService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }
}
