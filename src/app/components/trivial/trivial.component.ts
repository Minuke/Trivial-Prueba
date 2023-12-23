import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { Trivial } from 'app/shared/models/interfaces/trivial.interface';

@Component({
  selector: 'app-trivial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trivial.component.html',
  styleUrl: './trivial.component.scss'
})
export class TrivialComponent {

  @Input() questionData:Trivial = {question:"", answers:[]};

  selectAnswer(selectedAnswer:string, correct:boolean):void {
    console.log(selectedAnswer);
    console.log(correct);

    this.questionData.answers.forEach(answer => {
      if (answer.answer === selectedAnswer) {
        answer.selected = true;
      }
    });



  }

}
