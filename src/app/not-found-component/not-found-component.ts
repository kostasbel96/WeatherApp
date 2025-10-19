import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

/**
 * A component that displays a "Not Found" message when a city search fails.
 * 
 * This component reacts to input changes (city name) and triggers
 * an animation and error message display.
 */
@Component({
  selector: 'app-not-found-component',
  imports: [MatCardModule],
  templateUrl: './not-found-component.html',
  styleUrl: './not-found-component.css'
})
export class NotFoundComponent implements OnChanges {
  /**
   * The name of the city that could not be found.
   */
  @Input()
  nameOfCity?: string;

  /**
   * Controls whether the not-found animation is triggered.
   */
  animationTrigger = false;

  /**
   * Determines whether the error message should be displayed.
   */
  showError = false;

  /**
   * Lifecycle hook that is called when input properties change.
   * 
   * It resets the animation and error display state, then
   * re-triggers them after a short delay to refresh the animation.
   */
  ngOnChanges(): void {
    this.animationTrigger = false;
    this.showError = false;
    setTimeout(() => {
      this.animationTrigger = true;
      this.showError = true;
    }, 100);
  }
}
