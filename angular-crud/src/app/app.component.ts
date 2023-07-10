import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { JsonPipe } from '@angular/common';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsonPipe,AppService]
})
export class AppComponent {
  title = 'angular-crud';
  todo: Object | null = null; // or todo: any = null;
  
  constructor(private appService: AppService) {
    this.appService.getTodoData(3)
    .subscribe(data => { this.todo = data })
  }

 
}
