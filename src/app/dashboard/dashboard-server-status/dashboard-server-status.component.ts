import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-server-status.component.html',
  styleUrl: './dashboard-server-status.component.css'
})
export class DashServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor () {}

  ngOnInit() {
    setInterval(() => {
      const rand = Math.random();

      if (rand < 0.5){
        this.currentStatus = 'online';
      } else if (rand < 0.9){
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
