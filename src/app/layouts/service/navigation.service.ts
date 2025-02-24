import { Injectable } from '@angular/core';
import { NavigationItem } from '../models/navigation.interface';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navigationItems: NavigationItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
    },
    {
      label: 'AboutUs',
      icon: 'info',
      route: '/aboutus',
    },
  ];

  constructor() {}
  getNavigationItems(): NavigationItem[] {
    return this.navigationItems;
  }
}
