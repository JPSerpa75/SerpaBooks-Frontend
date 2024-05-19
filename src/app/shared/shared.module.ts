import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star-component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    HeaderBarComponent,
    FooterComponent,
    LayoutComponent,
    PaginationComponent,
    StarComponent,
    StarRatingComponent,
  ],
  exports: [
    HeaderBarComponent,
    FooterComponent,
    LayoutComponent,
    PaginationComponent,
    StarComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    AlertModule,
    RouterModule,
    HttpClientModule,
    NgbTooltipModule,
    FormsModule,
  ],
})
export class SharedModule {}
