import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizConfigPageComponent } from './pages/quiz-config-page/quiz-config-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizConfigPageComponent,
    HeaderComponent,
    SelectComponent,
    FooterComponent,
    InputComponent,
    QuizPageComponent,
    LoadingComponent,
    ScorePageComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
