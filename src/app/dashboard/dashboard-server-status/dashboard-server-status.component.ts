import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-server-status.component.html',
  styleUrl: './dashboard-server-status.component.css'
})
export class DashServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private interval?: ReturnType<typeof setInterval>;

  constructor () {}

  ngOnInit() {
    this.interval = setInterval(() => {
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

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
