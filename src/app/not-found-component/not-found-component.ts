import { Component, Input, OnChanges } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-not-found-component',
  imports: [MatCardModule],
  templateUrl: './not-found-component.html',
  styleUrl: './not-found-component.css'
})
export class NotFoundComponent implements OnChanges{
  @Input()
  nameOfCity?: string
  animationTrigger = false;
  showError = false;

  ngOnChanges(){
    this.animationTrigger = false;
    this.showError = false;
    setTimeout(() => {
      this.animationTrigger = true
      this.showError = true;}, 100);
  }
}
