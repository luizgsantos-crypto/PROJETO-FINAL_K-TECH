/*
 * K-TECH STARTUP - PROPRIETARY AND CONFIDENTIAL
 *
 * Copyright (c) 2026 Luiz Gabriel Silva Brito Santos (K-Tech).
 * Todos os direitos reservados. CNPJ: 66.454.862/0001-00
 *
 * AVISO LEGAL PARA AVALIAÇÃO ACADÊMICA (SENAI):
 * Este código-fonte é disponibilizado estritamente para fins de avaliação
 * técnica e acadêmica pelo corpo docente/avaliadores do SENAI.
 * É expressamente proibida a cópia, clonagem, modificação, distribuição, uso comercial
 * ou reprodução total ou parcial desta interface ou lógica sem a autorização
 * prévia e por escrito do fundador da K-Tech.
 *
 * Tecnologia atrelada ao Processo INPI: BR 20 2026 012104 0
 */

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

/**
 * LoginModalComponent
 * -------------------
 * Modal "Portal do Cliente" com:
 * - Campo de CPF/E-mail e senha;
 * - Botão para exibir/ocultar a senha;
 * - Fechamento ao clicar fora do modal ou no botão X.
 *
 * Comunicação com o componente pai:
 * - @Input  isOpen  : controla a visibilidade;
 * - @Output closed  : avisa o pai que o usuário fechou o modal.
 */
@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  /** Define se o modal está visível. */
  @Input() isOpen = false;

  /** Emitido quando o usuário fecha o modal. */
  @Output() closed = new EventEmitter<void>();

  /** Controla a exibição da senha em texto puro. */
  showPassword = false;

  /** Dados digitados no formulário (two-way binding com ngModel). */
  loginData = {
    email: '',
    password: ''
  };

  /**
   * Controle do aceite dos Termos de Uso e da Política de Privacidade (LGPD).
   * O botão de envio permanece desabilitado enquanto for false.
   */
  termsAccepted = false;

  /** Fecha o modal (clique no X ou no fundo escuro). */
  close(): void {
    this.closed.emit();
  }

  /** Impede que o clique dentro do modal feche o overlay. */
  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  /** Alterna entre mostrar e esconder a senha. */
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  /** Envio do formulário (integração com backend será feita futuramente). */
  onSubmit(): void {
    // Trava de segurança: mesmo que o [disabled] seja burlado pelo
    // DevTools, o envio não prossegue sem o aceite da LGPD.
    if (!this.termsAccepted) {
      return;
    }
    alert('Funcionalidade de login será implementada em breve');
  }
}
