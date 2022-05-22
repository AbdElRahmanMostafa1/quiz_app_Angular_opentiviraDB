import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizInterface } from '../interfaces/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  difficultyList: QuizInterface[] = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' },
  ];

  typeList: QuizInterface[] = [
    { id: 'multiple', name: 'Multiple Choice' },
    { id: 'boolean', name: 'True / False' },
  ];

  selectedCat: string = '';
  selectedDifficulty: string = '';
  selectedType: string = '';
  amount?: string = '10';
  score: number = 0;

  getQuizConfigCategory() {
    return this.http.get(`https://opentdb.com/api_category.php`);
  }

  startQuiz() {
    return this.http.get(
      `https://opentdb.com/api.php?amount=${this.amount}&category=${this.selectedCat}&difficulty=${this.selectedDifficulty}&type=${this.selectedType}`
    );
  }
}
