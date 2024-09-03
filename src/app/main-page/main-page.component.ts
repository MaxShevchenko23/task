import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { LinkFormComponent } from "../link-form/link-form.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NavBarComponent, LinkFormComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
