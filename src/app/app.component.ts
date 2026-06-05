import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DashServerStatusComponent } from './dashboard-server-status/dashboard-server-status.component';
import { ServerTrafficComponent } from "./server-traffic/server-traffic.component";
import { SupportTicketsComponent } from "./support-tickets/support-tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DashServerStatusComponent, ServerTrafficComponent, SupportTicketsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
