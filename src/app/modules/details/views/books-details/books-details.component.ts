import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoLivroStore } from '../../../../stores/info-livro-store';
import { InfoLivroModel } from '../../../../models/info-livro-model';
import { PrecoAmazonStore } from '../../../../stores/preco-amazon-store';
import { PrecoMagaluStore } from '../../../../stores/preco-magalu-store';
import { PrecoMercadoLivreStore } from '../../../../stores/preco-mercado-livre';
import { PrecoAmazonModel } from '../../../../models/preco-amazon-model';
import { PrecoMagaluModel } from '../../../../models/preco-magalu-model';
import { PrecoMercadoLivreModel } from '../../../../models/preco-mercado-livre-model';
import { LivroModel } from '../../../../models/livro-model';
import { AvaliacaoStore } from '../../../../stores/avaliacao-store';
import { AvaliacaoModel } from '../../../../models/avaliacao-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RatingCreateComponent } from '../../modals/rating-create/rating-create.component';
import { AuthTokenService } from '../../../../shared/services/auth-token.service';
import { ConfirmLoginComponent } from '../../modals/confirm-login/confirm-login.component';
import { EditInfoLivroComponent } from '../../modals/edit-info-livro/edit-info-livro.component';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrl: './books-details.component.scss',
})
export class BooksDetailsComponent implements OnInit {
  idInfoLivro!: number;
  infoLivro!: InfoLivroModel;

  precoAmazon!: PrecoAmazonModel;
  precoAmazonKindle!: PrecoAmazonModel;
  precoMagalu!: PrecoMagaluModel;
  precoMercadoLivre!: PrecoMercadoLivreModel;
  livroFisico?: LivroModel;
  livroKindle?: LivroModel;

  avaliacoes: AvaliacaoModel[] = [];
  listaPrecos: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private infoLivroStore: InfoLivroStore,
    private precoAmazonStore: PrecoAmazonStore,
    private precoMagaluStore: PrecoMagaluStore,
    private precoMercadoLivreStore: PrecoMercadoLivreStore,
    private avaliacaoStore: AvaliacaoStore,
    private modalService: NgbModal,
    private authTokenService: AuthTokenService
  ) {}

  get ValueToStars() {
    if (this.infoLivro.notaLivro) {
      return (
        Number(this.infoLivro.notaLivro.toString().slice(0, 1)) +
        (Number(this.infoLivro.notaLivro.toString().slice(2, 3)) >= 5 ? 1 : 0)
      );
    }
    return 0;
  }

  ngOnInit(): void {
    this.listaPrecos = [];
    this.idInfoLivro = this.route.snapshot.params['idInfoLivro'];
    this.infoLivroStore.getById(this.idInfoLivro).subscribe({
      next: (data) => {
        this.infoLivro = data;
        this._getLivros(this.infoLivro.livros);
        this._loadAvaliacoes();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  navigateToList() {
    this.router.navigate(['']);
  }

  newRating() {
    if (this.authTokenService.isTokenValid()) {
      const modalRef = this.modalService.open(RatingCreateComponent, {
        centered: true,
      });
      modalRef.componentInstance.idInfoLivro = this.infoLivro.id;
      modalRef.result.then((result) => {
        this.ngOnInit();
      });
      return;
    }
    this.modalService.open(ConfirmLoginComponent, { centered: true });
  }

  openEditInfo() {
    if (this.authTokenService.isTokenValid()) {
      const modalRef = this.modalService.open(EditInfoLivroComponent, {
        centered: true,
        size: 'lg',
      });
      modalRef.componentInstance.idInfoLivro = this.infoLivro.id;
      modalRef.componentInstance.sinopseLivro = this.infoLivro.sinopse
        ? this.infoLivro.sinopse
        : null;
      modalRef.componentInstance.resumoLivro = this.infoLivro.resumo
        ? this.infoLivro.resumo
        : null;
      modalRef.result.then((result) => {
        this.ngOnInit();
      });
      return;
    }
    this.modalService.open(ConfirmLoginComponent, { centered: true });
  }

  private _getLivros(livros: LivroModel[]) {
    this.livroFisico = livros.find(
      (livro) => livro.capa.descricaoCapa != 'Kindle'
    );
    this.livroKindle = livros.find(
      (livro) => livro.capa.descricaoCapa === 'eBook Kindle'
    );

    this._loadPrecos();
  }

  private _loadAvaliacoes() {
    this.avaliacaoStore.getAllByIdInfoLivro(this.infoLivro.id).subscribe({
      next: (data: any) => {
        this.avaliacoes = data;
      },
    });
  }

  private _loadPrecos() {
    if (this.livroFisico) {
      this.precoAmazonStore.getByIdLivro(this.livroFisico.id).subscribe({
        next: (data: any) => {
          if (data.preco != 0) {
            this.precoAmazon = data;
            this.precoAmazon.store = 'Amazon';
            this.listaPrecos.push(data);
            this._manipulateListPrizes();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
      this.precoMagaluStore.getByIdLivro(this.livroFisico.id).subscribe({
        next: (data: any) => {
          if (data.preco != 0) {
            this.precoMagalu = data;
            this.precoMagalu.store = 'Magalu';
            this.listaPrecos.push(data);
            this._manipulateListPrizes();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
      this.precoMercadoLivreStore.getByIdLivro(this.livroFisico.id).subscribe({
        next: (data: any) => {
          if (data.preco != 0) {
            this.precoMercadoLivre = data;
            this.precoMercadoLivre.store = 'Mercado Livre';
            this.listaPrecos.push(data);
            this._manipulateListPrizes();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
    if (this.livroKindle) {
      this.precoAmazonStore.getByIdLivro(this.livroKindle.id).subscribe({
        next: (data: any) => {
          if (data.preco != 0) {
            this.precoAmazonKindle = data;
            this.precoAmazonKindle.store = 'Amazon Kindle';
            this.listaPrecos.push(data);
            this._manipulateListPrizes();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  private _manipulateListPrizes() {
    this.listaPrecos.sort(
      (loja1: any, loja2: any) => loja1.preco - loja2.preco
    );
  }
}
