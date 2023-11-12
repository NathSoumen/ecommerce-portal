import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/interfaces/user-profile';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnChanges {
  currentUser: UserProfile | undefined;
  constructor(private router: Router) {}
  ngOnInit(): void {
    const foundUser = localStorage.getItem('currentUser');
    if (foundUser) {
      this.currentUser = JSON.parse(foundUser);
      console.log(this.currentUser);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {}
  openCartPage() {
    this.router.navigate(['openCart']);
  }
  logOut() {
    localStorage.clear();
    this.currentUser = undefined;
  }
}
