import { Component } from '@angular/core';
import { dummyTrafficData } from '../dummyTrafficData.model';

@Component({
  selector: 'app-server-traffic',
  standalone: true,
  imports: [],
  templateUrl: './server-traffic.component.html',
  styleUrl: './server-traffic.component.css'
})
export class ServerTrafficComponent {
  dummyTrafficData = dummyTrafficData;
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
