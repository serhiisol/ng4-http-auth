import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DataService, AuthenticationService } from '../shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  public data: Observable<any>;

  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthenticationService
  ) { }

  public loadData() {
    this.data = this.dataService.getUsers();
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
