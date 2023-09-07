import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-book-01';
  article: Article[];
  constructor(){
    this.article=[
      new Article('Angular Homepage', 'http://angular.io', 1),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ]
}

  addLink(title: HTMLInputElement, link: HTMLInputElement){
    this.article.push(new Article(title.value,link.value, 0))
    title.value="";
    link.value="";
    return false;
  }

}
