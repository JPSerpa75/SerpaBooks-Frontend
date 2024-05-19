import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksDetailsComponent } from './views/books-details/books-details.component';
import { RouterModule } from '@angular/router';
import { DetailsRoutingModule } from './details-routing.module';
import { InfoLivroStore } from '../../stores/info-livro-store';
import { SharedModule } from '../../shared/shared.module';
import { PrecoAmazonStore } from '../../stores/preco-amazon-store';
import { PrecoMagaluStore } from '../../stores/preco-magalu-store';
import { PrecoMercadoLivreStore } from '../../stores/preco-mercado-livre';
import { AvaliacaoStore } from '../../stores/avaliacao-store';
import { RatingCreateComponent } from './modals/rating-create/rating-create.component';
import { NgbModalModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmLoginComponent } from './modals/confirm-login/confirm-login.component';
import { EditInfoLivroComponent } from './modals/edit-info-livro/edit-info-livro.component';

@NgModule({
  declarations: [BooksDetailsComponent, RatingCreateComponent, ConfirmLoginComponent, EditInfoLivroComponent],
  imports: [
    CommonModule,
    RouterModule,
    DetailsRoutingModule,
    SharedModule,
    NgbModalModule,
    ReactiveFormsModule,
    NgbRatingModule,
  ],
  providers: [
    InfoLivroStore,
    PrecoAmazonStore,
    PrecoMagaluStore,
    PrecoMercadoLivreStore,
    AvaliacaoStore,
  ],
})
export class DetailsModule {}
