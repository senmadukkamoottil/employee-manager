import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { CustomSidenav } from './components/custom-sidenav/custom-sidenav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule, 
    MatSidenavModule,
  CustomSidenav],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected title = 'employee-manager';
  collapsed = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '65px' : '200px' );

}
