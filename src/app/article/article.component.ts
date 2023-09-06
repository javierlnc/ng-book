import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title: string;
  link: string;
  votes: number;
  constructor() {
    this.title = 'Angular';
    this.link = 'http://angular.io';
    this.votes = 10;

  }
  voteUp(){
    this.votes +=1;
  }
  voteDown(){
    this.votes -=1;
  }


  ngOnInit() {

  }
}
