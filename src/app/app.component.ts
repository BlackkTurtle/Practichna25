import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  title = 'Practichna25';

  petrostate={
    name:"Петро",surname:"Петрович",age:25
  }
  proglang:Array<any>=['html', 'css', 'js', 'php']
  langs:Array<any>=['Польща','Литва','Україна']
  workers = [
    {name: 'Микола', age: 30, salary: 400},
    {name: 'Василь', age: 31, salary: 500},
    {name: 'Петро', age: 32, salary: 600},
  ];
  name: string = 'Іван';

changeName() {
  this.name = 'Дмитро';
}
name1 = 'Іван';
  surname = 'Іванів';
  age = 25;

  changeName1() {
    this.name1 = 'Петро';
  }

  changeSurname() {
    this.surname = 'Петренко';
  }

  changeAge() {
    this.age = 30;
  }

  languages = ['html', 'css', 'js', 'php'];

  changeLanguage(): void {
    this.languages[this.languages.length - 1] = 'sql';
  }

  addLang() {
    this.languages.push('sql');
  }

  addFirstLang() {
    this.languages.unshift('sql');
  }

  deleteLang(lang: string) {
    const index = this.languages.indexOf(lang);
    if (index !== -1) {
      this.languages.splice(index, 1);
    }
  }
}

