import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  word1!: string;
  word2!: string;
  combinedWord!: string;

  concatWords() {
    this.combinedWord = this.word1 + this.word2;
  }

}
