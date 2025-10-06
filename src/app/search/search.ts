import { Component, EventEmitter, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-search',
  imports: [MatInputModule, MatFormFieldModule, FormsModule, 
    MatButtonModule
  ],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  @Output() 
  searchEvent = new EventEmitter<string>();
  city = '';

  async onSearch() {
    this.searchEvent.emit(this.city);
  }
}
