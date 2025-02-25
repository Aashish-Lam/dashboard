import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { OnDestroy, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationService } from '../../service/navigation.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ToolbarsComponent } from '../toolbars/toolbars.component';
import { ToolbarService } from '../../service/toolbar.service';
@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    ToolbarsComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnDestroy {
  protected readonly isMobile = signal(true);
  protected navigationlists: any;
  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  protected toggle: boolean = false;
  constructor(
    public naviagationservice: NavigationService,
    public toolbarservice: ToolbarService
  ) {
    const media = inject(MediaMatcher);
    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.navigationlists = this.naviagationservice.getNavigationItems();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.toolbarservice.currentToggle.subscribe(
      (element) => (this.toggle = element)
    );
  }
  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
  get Toggler(): boolean {
    return this.toggle;
  }
}
