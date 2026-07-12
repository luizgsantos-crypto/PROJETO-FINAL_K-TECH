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

/**
 * Modelos de dados (interfaces) usados em todo o site.
 * Centralizar as interfaces aqui evita duplicação e
 * garante tipagem forte entre os componentes.
 */

/** Slide exibido nos carrosséis (Hero e Comparar Modelos). */
export interface Slide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

/** Item de recurso do Ecossistema (A.T.L.A.S. / L.I.V.I.A.). */
export interface EcosystemFeature {
  icon: string;        // nome do ícone Lucide (ex.: 'target')
  title: string;
  description: string;
}

/** Recurso listado dentro de um plano de preços. */
export interface PricingFeature {
  text: string;
  included: boolean;
}

/** Plano de preços exibido no PricingCard. */
export interface PricingPlan {
  name: string;
  /** Caminho da imagem de tipografia futurista exibida no topo do cartão. */
  typography?: string;
  price: string;
  description: string;
  popular?: boolean;
  saas?: string | null;
  features: PricingFeature[];
}

/** Pergunta e resposta do FAQ. */
export interface Faq {
  question: string;
  answer: string;
}

/** Abas disponíveis na seção Comparar Modelos. */
export type PricingTab = 'bengala' | 'luva' | 'kit';
