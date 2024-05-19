import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../../../shared/services/login.service';

@Component({
  selector: 'app-confirm-login',
  templateUrl: './confirm-login.component.html',
  styleUrl: './confirm-login.component.scss',
})
export class ConfirmLoginComponent implements OnInit {
  idInfoLivro!: number;

  constructor(
    private route: ActivatedRoute,
    private activeModal: NgbActiveModal,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.idInfoLivro = this.route.snapshot.params['idInfoLivro'];
  }

  goBack() {
    this.activeModal.close();
  }

  goToLogin() {
    this.activeModal.close();
    this.loginService.redirectToLogin();
  }
}
