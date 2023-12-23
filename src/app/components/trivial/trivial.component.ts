import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  selectAnswer(answer:string):void {
    console.log(answer);
  }

}
