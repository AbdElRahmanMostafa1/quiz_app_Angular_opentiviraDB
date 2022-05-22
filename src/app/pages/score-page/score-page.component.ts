import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
// import goodScoreImg from '../../../assets/images/undraw_good_team_re_j1kc';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css'],
})
export class ScorePageComponent implements OnInit {
  constructor(private quizService: QuizService) {}

  isLoading: Boolean = true;
  feedback?: string;
  score: number = this.quizService.score;
  level?: string;
  category?: string;
  amount: any = this.quizService.amount;
  img: any;
  error: any;

  getQuizConfigCategory() {
    this.quizService.getQuizConfigCategory().subscribe({
      next: (res: any) => {
        this.isLoading = false;
        if (this.quizService.selectedCat !== '') {
          const selectedCat = res?.trivia_categories.find(
            (cat: { id: number; name: string }) =>
              cat.id.toString() == this.quizService.selectedCat
          );
          this.category = selectedCat.name;
        } else {
          this.category = 'Random Categories';
        }
      },
      error: (e: any) => {
        this.isLoading = false;
        this.error = e;
      },
    });
  }

  ngOnInit(): void {
    this.getQuizConfigCategory();
    if (this.score <= 3) {
      this.level = 'bad';
      this.feedback =
        'Oops! Please Take time to read at least 3 pages every day';
      this.img = '../../../assets/images/undraw_reading_book_re_kqpk (1).svg';
    } else if (this.score <= 6) {
      this.level = 'Fair';
      this.feedback =
        'Not Bad! Please Take time to read at least 2 pages every day';
      this.img = '../../../assets/images/undraw_good_team_re_j1kc.svg';
    } else if (this.score <= 9) {
      this.level = 'Very Good';
      this.feedback =
        'Very Good! Please Take time to read at least 1 pages every day';
      this.img = '../../../assets/images/undraw_reading_list_re_bk72 (1).svg';
    } else {
      this.level = 'Excellent';
      this.feedback = 'WOW! You Don`t need to read';
      this.img = '../../../assets/images/undraw_reading_time_re_phf7.svg';
    }
  }
}
