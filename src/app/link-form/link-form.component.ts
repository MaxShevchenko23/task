import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShortenerService } from '../services/shortener.service';
import { response } from 'express';

@Component({
  selector: 'app-link-form',
  standalone: true, // Помечаем компонент как standalone
  imports: [CommonModule, ReactiveFormsModule], // Импортируем необходимые модули
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.scss']
})
export class LinkFormComponent {
  linkForm: FormGroup;
  
  message: string = "";
  shortenedLink: string = "";
  

  constructor(private fb: FormBuilder, private _shortener: ShortenerService) {
    this.linkForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });

  }

  onSend() {
    console.log('im executed')
    if (this.linkForm.valid) {
      const userLink = this.linkForm.value.url;
      
      console.log('im chosen')


      
      this._shortener.shortenLink(userLink).subscribe({
        next: (response) => {
          console.log('Response Body:', response.body);
          console.log('Response Status:', response.status);

          if (response.status == 200){
            this.message = "This link is already exists";
            this.shortenedLink = ""
          }
          else if(response.status == 201){
            this.message = "Your link is shortened! Here you are!"
            this.shortenedLink = response.body.shortened
          }
          else
          this.message = "Your link is incorrect"
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });

    } else {
      console.log('Invalid form');
    }
  }
}
