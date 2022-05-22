import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

import { QuizInterface } from 'src/app/interfaces/quiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-config-page',
  templateUrl: './quiz-config-page.component.html',
  styleUrls: ['./quiz-config-page.component.css'],
})
export class QuizConfigPageComponent implements OnInit {
  isLoading: Boolean = true;
  catergoryList: any = [];
  difficultyList: QuizInterface[] = [];
  typeList: QuizInterface[] = [];
  amount?: string;
  error: any;

  constructor(private quizService: QuizService, private router: Router) {}

  selectCatHandler(catId: any) {
    this.quizService.selectedCat = catId;
  }

  selectDiffHandler(difficulty: any) {
    this.quizService.selectedDifficulty = difficulty;
  }

  selectTypeHandler(type: any) {
    this.quizService.selectedType = type;
  }

  inputChangeHandler(amount: any) {
    this.quizService.amount = amount;
  }

  ngOnInit(): void {
    this.quizService.getQuizConfigCategory().subscribe({
      next: (res) => {
        this.isLoading = false;
        this.catergoryList = res;
      },
      error: (e: any) => {
        this.isLoading = false;
        this.error = e;
        console.log(e);
      },
    });
    this.difficultyList = this.quizService.difficultyList;
    this.typeList = this.quizService.typeList;
    this.amount = this.quizService.amount;
    this.quizService.score = 0;
  }
}
