import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DashServerStatusComponent } from './dashboard/dashboard-server-status/dashboard-server-status.component';
import { ServerTrafficComponent } from "./dashboard/server-traffic/server-traffic.component";
import { SupportTicketsComponent } from "./dashboard/support-tickets/support-tickets.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DashServerStatusComponent, ServerTrafficComponent, SupportTicketsComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
