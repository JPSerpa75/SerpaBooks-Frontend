import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvaliacaoStore } from '../../../../stores/avaliacao-store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AvaliacaoModel } from '../../../../models/avaliacao-model';
import { UsuarioModel } from '../../../../models/usuario-model';
import { AuthTokenService } from '../../../../shared/services/auth-token.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rating-create',
  templateUrl: './rating-create.component.html',
  styleUrl: './rating-create.component.scss',
})
export class RatingCreateComponent implements OnInit {
  nota!: number;
  @Input() idAvaliacao!: number;
  @Input() idInfoLivro!: number;
  form!: FormGroup;
  usuario = {} as UsuarioModel;

  constructor(
    private route: ActivatedRoute,
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private avaliacaoStore: AvaliacaoStore,
    private authTokenService: AuthTokenService
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  goBack() {
    this.activeModal.close();
  }

  isNotValid(campo: string) {
    return this.form.touched && this.form.controls[campo].hasError('required');
  }

  avaliar() {
    if (this.form.invalid) {
      return;
    }
    console.log(this._normalizeFields());
    if (this.idAvaliacao) {
      this._updateAvaliacao();
    } else {
      this._insertAvaliacao();
    }
  }

  private _updateAvaliacao() {
    console.log('aqui');
  }

  private _insertAvaliacao() {
    this.avaliacaoStore.insert(this._normalizeFields()).subscribe({
      next: (data: any) => {
        this.activeModal.close(true);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      nota: [null],
      descricao: [null, Validators.required],
      dataAvaliacao: [null],
    });
  }

  private _normalizeFields() {
    let rawValue = this.form.getRawValue();
    this.usuario.id = this.authTokenService.getIdUsuario();

    return {
      id: this.idAvaliacao,
      valorAvaliacao: this.nota,
      descricaoAvaliacao: rawValue.descricao,
      usuario: this.usuario,
      idInfoLivro: this.idInfoLivro,
    } as AvaliacaoModel;
  }
}
