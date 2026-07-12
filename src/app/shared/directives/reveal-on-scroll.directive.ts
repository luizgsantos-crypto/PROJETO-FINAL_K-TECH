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

import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

/**
 * Diretiva appRevealOnScroll
 * --------------------------
 * Substitui o comportamento "whileInView" do framer-motion (React).
 *
 * Como funciona:
 * 1. O elemento recebe a classe CSS `.reveal` (invisível e deslocado para baixo);
 * 2. Um IntersectionObserver observa quando o elemento entra na tela;
 * 3. Ao entrar, a classe `.revealed` é adicionada, disparando a
 *    transição de opacidade/posição definida em styles.css;
 * 4. A animação ocorre apenas uma vez (equivalente a viewport={ once: true }).
 *
 * Uso no HTML:  <div appRevealOnScroll [revealDelay]="200"> ... </div>
 */
@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  /** Atraso opcional (em milissegundos) antes de revelar o elemento. */
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;
    this.renderer.addClass(element, 'reveal');

    // Fallback: se o navegador não suportar IntersectionObserver,
    // o elemento é exibido imediatamente.
    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(element, 'revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => this.renderer.addClass(element, 'revealed'), this.revealDelay);
            this.observer?.unobserve(element); // anima apenas uma vez
          }
        }
      },
      { threshold: 0.15 }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
