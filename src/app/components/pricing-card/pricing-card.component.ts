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

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { PricingPlan } from '../../shared/models/site.models';

/**
 * PricingCardComponent
 * --------------------
 * Cartão de plano de preços (LITE / PRO / DELUXE).
 * Recebe um objeto PricingPlan completo via @Input e renderiza:
 * - Nome, preço e descrição;
 * - Selo "Mais Vendido" quando plan.popular = true;
 * - Etiqueta do app SaaS quando plan.saas estiver preenchido;
 * - Lista de recursos com ícones de incluído/não incluído.
 */
@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css']
})
export class PricingCardComponent {
  /** Plano a ser exibido no cartão. */
  @Input({ required: true }) plan!: PricingPlan;
}
