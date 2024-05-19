import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from '../../../../models/usuario-model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthTokenService } from '../../../../shared/services/auth-token.service';
import { InfoLivroStore } from '../../../../stores/info-livro-store';
import { InfoLivroUpdateModel } from '../../../../models/info-livro-update-model';

@Component({
  selector: 'app-edit-info-livro',
  templateUrl: './edit-info-livro.component.html',
  styleUrl: './edit-info-livro.component.scss',
})
export class EditInfoLivroComponent implements OnInit {
  @Input() sinopseLivro: string | null = null;
  @Input() resumoLivro: string | null = null;
  @Input() idInfoLivro!: number;
  form!: FormGroup;
  usuario = {} as UsuarioModel;

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private authTokenService: AuthTokenService,
    private infoLivroStore: InfoLivroStore
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  isNotValid(campo: string) {
    return this.form.touched && this.form.controls[campo].hasError('required');
  }

  goBack() {
    this.activeModal.close();
  }

  update() {
    if (this.form.invalid) {
      return;
    }
    this.infoLivroStore
      .updateResumoAndSinopse(this._normalizeFields())
      .subscribe({
        next: (data) => {
          console.log(data);
          this.activeModal.close(true);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      resumo: [this.resumoLivro, Validators.required],
      sinopse: [this.sinopseLivro, Validators.required],
    });
  }

  private _normalizeFields() {
    let rawValue = this.form.getRawValue();
    this.usuario.id = this.authTokenService.getIdUsuario();

    return {
      id: this.idInfoLivro,
      resumo: rawValue.resumo,
      sinopse: rawValue.sinopse,
    } as InfoLivroUpdateModel;
  }
}
