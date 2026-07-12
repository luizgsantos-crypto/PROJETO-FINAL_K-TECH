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

/**
 * CookieBannerComponent
 * ---------------------
 * Banner de consentimento de cookies (LGPD).
 *
 * Comunicação com o componente pai:
 * - @Input  isVisible : controla se o banner aparece;
 * - @Output accepted  : emitido quando o usuário clica em "Aceitar".
 */
@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent {
  /** Recebe do pai se o banner deve estar visível. */
  @Input() isVisible = true;

  /** Evento disparado quando o usuário aceita os cookies. */
  @Output() accepted = new EventEmitter<void>();

  /** Função disparada quando o usuário clica em "Aceitar". */
  aceitarCookies(): void {
    this.isVisible = false;
    this.accepted.emit();
  }
}
