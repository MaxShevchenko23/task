import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { LinksTableService,  } from '../services/links-table.service';
import { LinkInfoService } from '../services/link-info.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-link-table',
  imports: [NgFor, RouterLink],
  templateUrl: './link-table.component.html',
  styleUrls: ['./link-table.component.css']
})
export class LinkTableComponent {
  
  links: any[] = [];

  constructor(private linksService: LinksTableService, 
    private linkInfoService: LinkInfoService,
    private router: Router) {
    
    this.getLinks();
  }




  getLinks() {
    this.linksService.getLinks().subscribe(response => {
      if (response.status == 200) {
        this.links = response.body;
      }
    });
  }
  
  editLink(index: number): void {
    
  }

  deleteLink(index: number): void {
    console.log('Delete link at index:', index);
    this.links.splice(index, 1);
  }

  showInfo(shortLink: string): void{
    this.router.navigate(['/info', shortLink ]);
  }
}
