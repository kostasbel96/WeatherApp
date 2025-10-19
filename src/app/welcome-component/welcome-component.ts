import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

/**
 * A simple component that displays a welcome message
 * before the user performs their first weather search.
 *
 * This component serves as an initial placeholder in the UI,
 * encouraging users to enter a city name to view weather data.
 */
@Component({
  selector: 'app-welcome-component',
  imports: [MatCardModule],
  templateUrl: './welcome-component.html',
  styleUrl: './welcome-component.css'
})
export class WelcomeComponent {
  // This component does not currently include any logic or inputs.
  // It only provides static content and styling for the welcome screen.
}
