import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyDataPage } from '../my-data/my-data';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  home = HomePage;
  myData = MyDataPage;

  constructor() {
  }
}
