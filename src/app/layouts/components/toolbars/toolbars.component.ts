import { Component, signal } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { ToolbarService } from '../../service/toolbar.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-toolbars',
  imports: [MatToolbar, MatIcon, HeaderComponent],
  templateUrl: './toolbars.component.html',
  styleUrl: './toolbars.component.scss',
})
export class ToolbarsComponent {
  protected check = true;
  constructor(public toolbarservice: ToolbarService) {}
  toggle(): void {
    this.check = !this.check;
    this.toolbarservice.setToggle(this.check);
    console.log(this.check);
  }
}
