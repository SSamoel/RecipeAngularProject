import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // userSubscription!: Subscription;
  // isAuthenticated = false;
  searchText: string = '';
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }


  constructor(private router: Router) { }
  ngOnInit(): void {
    // this.userSubscription = this.authenticationService.user.subscribe((user) => {
    //   this.isAuthenticated = !!user && !!user.token;
    // })
  }

  onSearch() {
    if (!this.searchText.trim()) return;
    this.router.navigate(['/recipes'], { queryParams: { q: this.searchText } });
  }

  // onLogout() {
  //   this.isAuthenticated = false;
  //   this.authenticationService.logout();
  //   this.router.navigate(['/auth'])
  // }
}
