import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor() {}

  sendEmail(e: Event) {
    e.preventDefault();  

    emailjs.sendForm('service_zaxfcef', 'template_obbn73s', e.target as HTMLFormElement, '8AYL_iXkLpV5JQg-E')
      .then((result: any) => {
          console.log('Email sent successfully!', result.text);
          (e.target as HTMLFormElement).reset(); 
      }, (error: any) => {
          console.error('Failed to send email:', error.text);
      });
  }
}
