import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LinkInfoService } from '../services/link-info.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-link-info',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './link-info.component.html',
  styleUrl: './link-info.component.css'
})
export class LinkInfoComponent {


  shortLink: string = '';
  linkInfo: any;


  constructor(private route: ActivatedRoute, private linkInfoService: LinkInfoService) {
  }

  ngOnInit(): void{
    this.shortLink = this.route.snapshot.paramMap.get('link') ?? '';
    this.getInfo()
  }

  getInfo(): void{
    this.linkInfoService.loadInfo(this.shortLink).subscribe(response=>{
      this.linkInfo = response.body;
      console.log(this.linkInfo)
    });

  }

}
