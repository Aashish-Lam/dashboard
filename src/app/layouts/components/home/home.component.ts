import { Component, inject, signal } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly isMobile = signal(true);
  protected navigationlists: any;
  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  event: any;
  onAction(event: Event): void {}
  constructor() {
    const media = inject(MediaMatcher);
    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
}
