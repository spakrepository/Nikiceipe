import { Component, ElementRef, ViewChild, OnInit,  } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import {trigger, transition, style, query, group, animate, animation} from '@angular/animations';
import {Test} from './animations/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('header', {static: true}) header: ElementRef;
  @ViewChild('leftNav', {static: true}) leftNav: ElementRef;

  public windowWidth: any;
  public hideNavigation = true;

  constructor(
    private route: Router,
  ) {
  }

  ngOnInit() {
    this.routeEvent(this.route);
    // const test = new Test();
    // console.log(test.add(10, 20));
  }

  routeEvent(router: Router): void {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const url = e.url.substr(e.url.indexOf('/') + 1);
        console.log(url);
        if (url === 'default' || url === '') {
          this.hideNavigation = false;
        } else {
          this.hideNavigation = true;
        }
      }
    });
  }

}
