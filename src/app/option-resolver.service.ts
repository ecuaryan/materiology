import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class OptionResolverService implements Resolve<any> {
  constructor(private dataService: DataService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let id = +route.paramMap.get('id');

    if (!id) {
      id = 1;
    }

    return this.dataService.getLiverOption(id).take(1).map(option => {
      if (option) {
        return option;
      }
    });
  }
}
