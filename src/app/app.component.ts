import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-book-01';
  addLink(title: HTMLInputElement, link: HTMLInputElement){
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
