import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit,OnChanges {
  constructor(private router:Router){

  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  openCartPage(){
this.router.navigate(["openCart"])
  }

}
