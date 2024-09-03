import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  serviceInfo = `
    We provide free services for shortening links.
  `;

  donationInfo = `
    Your donations help us to maintain and improve our services, ensuring we can keep
    providing value to the community. Any amount you contribute is greatly appreciated!
  `;
}
