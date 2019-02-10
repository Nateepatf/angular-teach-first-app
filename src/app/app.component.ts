import { Component } from '@angular/core';
import { Card } from './card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards : Card[] = [];
    get sorted(): Card[]{
      console.log('access');
      return this.cards.sort(
        (a,b) => b.votes - a.votes
      );
  }
  onclick(firstname:HTMLInputElement,lastName:HTMLInputElement){
    console.log(firstname.value+"  "+lastName.value);
    //new Card(firstname.value,lastName.value , 0);
    const card = new Card(firstname.value,lastName.value ,0)
    this.cards.push(card);
    firstname.value = '';
    lastName.value = '';
  }
}
