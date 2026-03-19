import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderFlippingComponent } from './shared/header-flipping/header-flipping.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderFlippingComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AgoraJobs';
}
