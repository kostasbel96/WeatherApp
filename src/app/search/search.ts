import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

/**
 * A search component that allows users to enter a city name
 * and emit the value to a parent component when searching for weather data.
 */
@Component({
  selector: 'app-search',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  /**
   * Emits the entered city name when the user performs a search.
   */
  @Output()
  searchEvent = new EventEmitter<string>();

  /**
   * The name of the city entered by the user in the search input field.
   */
  city = '';

  /**
   * Called when the user clicks the search button.
   * Emits the current city name to the parent component.
   */
  onSearch(): void {
    this.searchEvent.emit(this.city);
  }
}
