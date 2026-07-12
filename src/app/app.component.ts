/*
 * K-TECH STARTUP - PROPRIETARY AND CONFIDENTIAL
 *
 * Copyright (c) 2026 Luiz Gabriel Silva Brito Santos (K-Tech).
 * Todos os direitos reservados. 
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

import { Component, HostListener, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente raiz da aplicação.
 *
 * Além de hospedar as rotas, implementa a camada de dissuasão
 * contra inspeção casual do código no navegador:
 * - Bloqueia o menu de contexto (botão direito);
 * - Bloqueia F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C e Ctrl+U.
 *
 * Os bloqueios só atuam em BUILD DE PRODUÇÃO (isDevMode() === false),
 * para não atrapalhar o desenvolvimento local com ng serve.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  /** true durante o `ng serve`; false no build de produção. */
  private readonly isDev = isDevMode();

  /** Bloqueia o clique com o botão direito (menu de contexto). */
  @HostListener('document:contextmenu', ['$event'])
  onContextMenu(event: MouseEvent): void {
    if (!this.isDev) {
      event.preventDefault();
    }
  }

  /** Bloqueia os atalhos de teclado que abrem o DevTools / código-fonte. */
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.isDev) {
      return;
    }

    const key = event.key.toUpperCase();

    const isF12 = key === 'F12';
    const isDevToolsCombo = event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(key);
    const isViewSource = event.ctrlKey && !event.shiftKey && key === 'U';

    if (isF12 || isDevToolsCombo || isViewSource) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
