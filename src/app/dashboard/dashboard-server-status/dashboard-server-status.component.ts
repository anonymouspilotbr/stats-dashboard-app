import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-server-status.component.html',
  styleUrl: './dashboard-server-status.component.css'
})
export class DashServerStatusComponent {
  currentStatus = 'online';
}
