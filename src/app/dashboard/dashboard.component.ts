import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DataService, AuthenticationService } from '../shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  public users$: Observable<any>;
  public data$: Observable<any>;

  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthenticationService
  ) { }

  public loadData() {
    this.users$ = this.dataService.getUsers();
    this.data$ = this.dataService.getData();
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
