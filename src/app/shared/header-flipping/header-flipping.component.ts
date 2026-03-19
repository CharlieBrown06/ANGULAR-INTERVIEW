import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-header-flipping',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './header-flipping.component.html',
  styleUrl: './header-flipping.component.scss',
})
export class HeaderFlippingComponent {
  authMockEnabled = false;
  showTagsEnabled = false;

  toggleAuthMock(): void {
    this.authMockEnabled = !this.authMockEnabled;
  }

  toggleShowTags(): void {
    this.showTagsEnabled = !this.showTagsEnabled;
  }

  onUserClick(): void {
    console.log('User clicked');
  }

  onLogout(): void {
    console.log('Logout clicked');
  }
}
