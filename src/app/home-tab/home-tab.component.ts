import {Component, OnInit} from '@angular/core';
import {Observable, Observer} from 'rxjs';
@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.css']
})
export class HomeTabComponent implements OnInit {
  asyncTabs: Observable<HomeTabComponent[]>;

  constructor() {
    this.asyncTabs =
        Observable.create((observer: Observer<HomeTabComponent[]>) => {
          setTimeout(() => {
            observer.next([]);
          }, 1000);
        });
  }

  ngOnInit() {}
}
