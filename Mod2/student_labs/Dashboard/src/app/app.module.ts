import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AverageRatingComponent } from './average-rating/average-rating.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { WebsiteVisitorsComponent } from './website-visitors/website-visitors.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    AverageRatingComponent,
    SentimentAnalysisComponent,
    WebsiteVisitorsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
