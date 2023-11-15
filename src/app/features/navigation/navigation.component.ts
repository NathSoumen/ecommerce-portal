import {
  Component,
  ElementRef,
  HostListener,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { UserProfile } from 'src/app/interfaces/user-profile';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnChanges {
  @ViewChild('sideBarWraper', { static: false }) sideBarWraper:
    | ElementRef
    | undefined;

  currentUser: UserProfile | undefined;
  showSideBar = false;
  height: number;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    console.log('this.sideBarWraper', this.sideBarWraper);

    this.height = window.innerHeight;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const id = (event.target as HTMLElement).id;
    if (this.showSideBar === true && id !== 'toggleSideBar') {
      // const clickedInside = id === 'warapper';
      // var warapperSideBar: any = document.getElementById('warapper');
      // console.log('warapperSideBar', warapperSideBar);
      // console.log(' this.el.nativeElement', this.el.nativeElement);
      // if (warapperSideBar) {
      //   const clickedInsideDiv =
      //     this.el.nativeElement.contains(warapperSideBar);
      //   console.log('clickedInsideDiv', clickedInsideDiv);
      // }
      // // Check if the click is outside the div
      // if (!clickedInside) {
      //   this.showSideBar = false;
      //   // console.log('Click outside the div');
      // }
    }
  }

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
  onHover(drop: NgbDropdown | any) {
    console.log(drop);
    // drop.open();
  }
  onMouseHoverout(drop: NgbDropdown | any) {
    // drop.close();
  }
  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }
}
