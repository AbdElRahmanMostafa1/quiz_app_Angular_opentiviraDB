import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizConfigPageComponent } from './pages/quiz-config-page/quiz-config-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';

const routes: Routes = [
  { path: '', component: QuizConfigPageComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'score', component: ScorePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
