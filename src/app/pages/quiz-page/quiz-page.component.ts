import { Component, OnInit } from '@angular/core';
import { QuizInterface } from 'src/app/interfaces/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { decode } from 'html-entities';
import shuffle from '../../utils/shuffleArray';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  quiz: any = [];
  questionIndex: number = 0;
  answers: any = [];
  shuffledAsnwers: any = [];
  isLoading: Boolean = true;
  decode: any = decode;
  score: number = this.quizService.score;
  error: any;

  constructor(private quizService: QuizService, private router: Router) {}

  startQuiz() {
    this.quizService.startQuiz().subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.quiz = res.results;
        this.randomizeArray();
      },
      error: (e: any) => {
        this.isLoading = false;
        this.error = e;
      },
    });
  }

  randomizeArray() {
    this.answers = [
      ...this.quiz[this.questionIndex]?.incorrect_answers,
      this.quiz[this.questionIndex]?.correct_answer,
    ];
    this.shuffledAsnwers = shuffle(this.answers);
  }

  checkAnswerHandler(e: any) {
    if (e.textContent.trim() === this.quiz[this.questionIndex].correct_answer) {
      this.quizService.score++;
      this.score++;
    }

    if (this.questionIndex < this.quiz.length - 1) {
      this.questionIndex++;
      this.randomizeArray();
    } else {
      this.router.navigateByUrl('/score');
    }
  }

  ngOnInit(): void {
    this.startQuiz();
  }
}
