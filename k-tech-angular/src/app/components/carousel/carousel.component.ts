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
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Slide } from '../../shared/models/site.models';

/**
 * CarouselComponent
 * -----------------
 * Carrossel de imagens reutilizável, com:
 * - Troca automática de slides (autoplay configurável);
 * - Setas de navegação (anterior / próximo);
 * - Indicadores de posição (bolinhas);
 * - Fallback automático caso uma imagem falhe ao carregar.
 *
 * Uso: <app-carousel [slides]="meusSlides" [autoPlayMs]="5000"></app-carousel>
 */
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  /** Lista de slides a exibir (imagem, título e subtítulo). */
  @Input() slides: Slide[] = [];

  /** Intervalo do autoplay em milissegundos. Use 0 para desativar. */
  @Input() autoPlayMs = 5000;

  /** Altura do carrossel (classe Tailwind), ex.: 'h-[500px]'. */
  @Input() heightClass = 'h-[500px]';

  /**
   * Como a imagem preenche o quadro:
   * - 'cover'   : preenche todo o quadro (pode cortar as bordas);
   * - 'contain' : exibe a imagem INTEIRA, sem cortes (ideal para
   *               renders de produto e fotos da equipe).
   */
  @Input() imageFit: 'cover' | 'contain' = 'cover';

  /** Índice do slide atualmente visível. */
  currentSlide = 0;

  /** Guarda as URLs de imagens que falharam ao carregar. */
  private brokenImages = new Set<string>();

  private timer?: ReturnType<typeof setInterval>;

  // ---------- Ciclo de vida ----------

  ngOnInit(): void {
    if (this.autoPlayMs > 0 && this.slides.length > 1) {
      this.timer = setInterval(() => this.nextSlide(), this.autoPlayMs);
    }
  }

  ngOnDestroy(): void {
    // Evita vazamento de memória ao destruir o componente.
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  // ---------- Navegação ----------

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  // ---------- Fallback de imagem ----------

  onImageError(src: string): void {
    this.brokenImages.add(src);
  }

  isBroken(src: string): boolean {
    return this.brokenImages.has(src);
  }
}
