import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @Output() addTicket = new EventEmitter<{title: string; text: string}>
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, ticketText: string){
    this.addTicket.emit({title: title, text: ticketText});
    this.form?.nativeElement.reset();
  }
}
