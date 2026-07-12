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
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CookieBannerComponent } from '../../components/cookie-banner/cookie-banner.component';
import { LoginModalComponent } from '../../components/login-modal/login-modal.component';
import { PricingCardComponent } from '../../components/pricing-card/pricing-card.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import {
  EcosystemFeature,
  Faq,
  PricingPlan,
  PricingTab,
  Slide
} from '../../shared/models/site.models';

/**
 * HomeComponent
 * -------------
 * Página principal (landing page) da K-Tech.
 * Contém: Navbar, Hero, Ecossistema, Comparar Modelos, Nossa História,
 * FAQ, Segurança, Contato B2B e Footer.
 *
 * Toda a lógica e os dados ficam neste arquivo (.ts);
 * o visual fica no home.component.html.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule,
    CarouselComponent,
    LoginModalComponent,
    CookieBannerComponent,
    PricingCardComponent,
    RevealOnScrollDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // =========================================================
  // ESTADO DA INTERFACE
  // =========================================================

  /** Menu hambúrguer (mobile) aberto ou fechado. */
  mobileMenuOpen = false;

  /** Modal "Portal do Cliente" aberto ou fechado. */
  loginModalOpen = false;

  /** Banner de cookies visível ou não. */
  cookieBannerVisible = true;

  /** Índice da pergunta do FAQ atualmente aberta (null = todas fechadas). */
  openFaq: number | null = null;

  /** Aba ativa na seção "Comparar Modelos". */
  activeTab: PricingTab = 'kit';

  /** Slide ativo no carrossel de materiais (LITE / PRO / DELUXE). */
  activeComparisonSlide = 0;

  /** Tipo de contato selecionado: Pessoa Física ou Pessoa Jurídica. */
  contactType: 'fisica' | 'juridica' = 'juridica';

  /** Dados do formulário de contato. */
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  // =========================================================
  // DADOS DO SITE
  // =========================================================

  /** Slides do carrossel principal (Hero). */
  readonly heroSlides: Slide[] = [
    {
      src: 'assets/produtos/atlas-completo.jpg',
      alt: 'Bengala Inteligente A.T.L.A.S. - versões LITE, PRO e DELUXE em vista de corte técnico',
      title: 'A.T.L.A.S.',
      subtitle: 'Sistema Avançado de Percepção de Terreno e Localização'
    },
    {
      src: 'assets/produtos/livia-completo.jpg',
      alt: 'Luva Háptica L.I.V.I.A. - versões LITE, PRO e DELUXE em vista de corte técnico',
      title: 'L.I.V.I.A.',
      subtitle: 'Interface Localizada de Vibração Interativa Adaptável'
    }
  ];

  /** Slides do carrossel de comparação de materiais. */
  /**
   * Imagens do carrossel "Comparar Modelos", organizadas por produto.
   * Ao trocar a aba (Bengala / Luva / Kit), o carrossel exibe
   * as 3 versões (LITE, PRO, DELUXE) do produto selecionado.
   */
  readonly productSlides: Record<PricingTab, Slide[]> = {
    bengala: [
      {
        src: 'assets/imagens/bengala-lite.jpg',
        alt: 'Bengala A.T.L.A.S. versão LITE em vista de corte técnico',
        title: 'LITE',
        subtitle: 'Haste em Alumínio · PCB simples · Sensor ultrassônico frontal'
      },
      {
        src: 'assets/imagens/bengala-pro.jpg',
        alt: 'Bengala A.T.L.A.S. versão PRO em vista de corte técnico',
        title: 'PRO',
        subtitle: 'ESP-32 com Bluetooth · Inclinômetro · Bateria de alta capacidade'
      },
      {
        src: 'assets/imagens/bengala-deluxe.jpg',
        alt: 'Bengala A.T.L.A.S. versão DELUXE em vista de corte técnico',
        title: 'DELUXE',
        subtitle: 'Fibra de Carbono · GPS integrado · Sensor ToF + ultrassônico'
      }
    ],
    luva: [
      {
        src: 'assets/imagens/luva-lite.jpg',
        alt: 'Luva L.I.V.I.A. versão LITE em vista de corte técnico',
        title: 'LITE',
        subtitle: 'PCB simples · Motor único · Alertas essenciais'
      },
      {
        src: 'assets/imagens/luva-pro.jpg',
        alt: 'Luva L.I.V.I.A. versão PRO em vista de corte técnico',
        title: 'PRO',
        subtitle: 'ESP-32 Dual-Core · Matriz háptica direcional · Botão SOS'
      },
      {
        src: 'assets/imagens/luva-deluxe.jpg',
        alt: 'Luva L.I.V.I.A. versão DELUXE em vista de corte técnico',
        title: 'DELUXE',
        subtitle: 'Circuitos flexíveis · Sensor biométrico · LEDs de status'
      }
    ],
    kit: [
      {
        src: 'assets/imagens/kit-lite.jpg',
        alt: 'Kit Integrador K-Tech versão LITE: bengala e luva',
        title: 'LITE',
        subtitle: 'Bengala + Luva LITE · Navegação essencial'
      },
      {
        src: 'assets/imagens/kit-pro.jpg',
        alt: 'Kit Integrador K-Tech versão PRO: bengala e luva',
        title: 'PRO',
        subtitle: 'Bengala + Luva PRO · Ecossistema conectado'
      },
      {
        src: 'assets/imagens/kit-deluxe.jpg',
        alt: 'Kit Integrador K-Tech versão DELUXE: bengala e luva',
        title: 'DELUXE',
        subtitle: 'Bengala + Luva DELUXE · Experiência premium completa'
      }
    ]
  };

  /** Fotos da equipe K-Tech (carrossel da seção Nossa História). */
  readonly teamSlides: Slide[] = [
    { src: 'assets/equipe/equipe-1.jpg', alt: 'Equipe K-Tech trabalhando no laboratório' },
    { src: 'assets/equipe/equipe-2.jpg', alt: 'Equipe K-Tech em bancada de prototipagem' },
    { src: 'assets/equipe/equipe-3.jpg', alt: 'Integrantes da equipe K-Tech' },
    { src: 'assets/equipe/equipe-4.jpg', alt: 'Equipe K-Tech reunida' }
  ];

  /** Recursos da bengala A.T.L.A.S. */
  readonly atlasFeatures: EcosystemFeature[] = [
    {
      icon: 'target',
      title: 'Mapeamento a Laser ToF',
      description:
        'Sensores avançados de Time-of-Flight criam mapas ambientais 3D precisos com detecção de até 5 metros.'
    },
    {
      icon: 'waves',
      title: 'Sensores Ultrassônicos',
      description:
        'Array ultrassônico multidirecional para detecção abrangente de obstáculos e consciência espacial.'
    }
  ];

  /** Recursos da luva L.I.V.I.A. */
  readonly liviaFeatures: EcosystemFeature[] = [
    {
      icon: 'hand',
      title: 'Feedback Háptico Sem Fadiga',
      description:
        'Motores hápticos de precisão traduzem dados ambientais em padrões táteis intuitivos.'
    },
    {
      icon: 'shield',
      title: 'Zero Paresthesia',
      description:
        'Design de grau médico previne fadiga nervosa e garante uso confortável em longo prazo.'
    }
  ];

  /** Planos da Bengala A.T.L.A.S. */
  readonly plansBengala: PricingPlan[] = [
    {
      name: 'LITE',
      typography: 'assets/imagens/tipografia-lite.jpg',
      price: 'R$ 599',
      description: 'Navegação Essencial',
      features: [
        { text: '2 Atuadores Sonoros', included: true },
        { text: 'Sensor ToF Básico', included: true },
        { text: 'Haste em Alumínio', included: true },
        { text: 'GPS Integrado', included: false }
      ]
    },
    {
      name: 'PRO',
      typography: 'assets/imagens/tipografia-pro.jpg',
      price: 'R$ 999',
      description: 'Detecção Avançada',
      popular: true,
      features: [
        { text: '3 Atuadores Sonoros', included: true },
        { text: 'Matriz ToF Avançada', included: true },
        { text: 'Haste em Alumínio', included: true },
        { text: 'GPS Integrado', included: true }
      ]
    },
    {
      name: 'DELUXE',
      typography: 'assets/imagens/tipografia-deluxe.jpg',
      price: 'R$ 1.599',
      description: 'Premium com Voz',
      features: [
        { text: '4 Atuadores com Voz', included: true },
        { text: 'Matriz ToF 8x8', included: true },
        { text: 'GPS Integrado', included: true },
        { text: 'Haste em Fibra de Carbono', included: true }
      ]
    }
  ];

  /** Planos da Luva L.I.V.I.A. */
  readonly plansLuva: PricingPlan[] = [
    {
      name: 'LITE',
      typography: 'assets/imagens/tipografia-lite.jpg',
      price: 'R$ 399',
      description: 'Feedback Básico',
      features: [
        { text: '2 Motores Vibracall', included: true },
        { text: 'Conexão BLE Rápida', included: true },
        { text: 'Tecido Respirável', included: true },
        { text: 'Giroscópio', included: false }
      ]
    },
    {
      name: 'PRO',
      typography: 'assets/imagens/tipografia-pro.jpg',
      price: 'R$ 699',
      description: 'Design Tático',
      popular: true,
      features: [
        { text: '3 Motores Vibracall', included: true },
        { text: 'Design Tático', included: true },
        { text: 'Bateria de Longa Duração', included: true },
        { text: 'Giroscópio', included: false }
      ]
    },
    {
      name: 'DELUXE',
      typography: 'assets/imagens/tipografia-deluxe.jpg',
      price: 'R$ 999',
      description: 'Alta Definição',
      features: [
        { text: '4 Motores LRA Alta Definição', included: true },
        { text: 'Acabamento Premium em Neoprene', included: true },
        { text: 'Giroscópio (Detecção de Queda)', included: true },
        { text: 'Resistência à Água IP67', included: true }
      ]
    }
  ];

  /** Planos do Kit Integrador (Bengala + Luva). */
  readonly plansKit: PricingPlan[] = [
    {
      name: 'LITE',
      typography: 'assets/imagens/tipografia-lite.jpg',
      price: 'R$ 899',
      description: 'Navegação Essencial',
      features: [
        { text: 'Bengala + Luva LITE', included: true },
        { text: 'Navegação Essencial', included: true },
        { text: 'Zero Parestesia', included: true },
        { text: 'Sem Mensalidade', included: true }
      ]
    },
    {
      name: 'PRO',
      typography: 'assets/imagens/tipografia-pro.jpg',
      price: 'R$ 1.499',
      description: 'Navegação Avançada',
      popular: true,
      saas: 'R$ 14,90/mês',
      features: [
        { text: 'Bengala + Luva PRO', included: true },
        { text: 'Navegação Avançada', included: true },
        { text: 'Mensalidade do App (R$ 14,90/mês)', included: true },
        { text: 'Atualizações OTA', included: true }
      ]
    },
    {
      name: 'DELUXE',
      typography: 'assets/imagens/tipografia-deluxe.jpg',
      price: 'R$ 2.399',
      description: 'Ecossistema Premium',
      saas: 'R$ 29,90/mês',
      features: [
        { text: 'Bengala + Luva DELUXE', included: true },
        { text: 'GPS e SOS Integrados', included: true },
        { text: 'Mensalidade do App (R$ 29,90/mês)', included: true },
        { text: 'IA Preditiva + Suporte Premium', included: true }
      ]
    }
  ];

  /** Perguntas frequentes. */
  readonly faqs: Faq[] = [
    {
      question: 'Qual é a duração da bateria dos dispositivos K-Tech?',
      answer:
        'O modelo LITE oferece 8 horas de uso contínuo, o PRO oferece 12 horas e o DELUXE se estende para 16 horas. Todos os modelos suportam carregamento rápido (80% em 45 minutos) e incluem monitoramento de bateria via nosso aplicativo móvel.'
    },
    {
      question: 'Qual garantia e suporte está incluído?',
      answer:
        'Todos os dispositivos K-Tech vêm com garantia limitada de 2 anos cobrindo defeitos de fabricação. Usuários PRO e DELUXE recebem suporte prioritário e verificações anuais de saúde do dispositivo. Planos de garantia estendida estão disponíveis.'
    },
    {
      question: 'Como funcionam as atualizações do App (SaaS)?',
      answer:
        'Assinantes PRO e DELUXE recebem atualizações automáticas de firmware OTA (over-the-air), otimização de rotas baseada em nuvem, alertas de manutenção preditiva e acesso a novos recursos de IA conforme são lançados.'
    },
    {
      question: 'O sistema é compatível com tecnologias assistivas existentes?',
      answer:
        'Sim. Os dispositivos K-Tech se integram perfeitamente com leitores de tela, assistentes de voz e outras ferramentas de acessibilidade. Nossa API aberta permite que desenvolvedores terceiros criem aplicativos compatíveis.'
    },
    {
      question: 'E quanto à privacidade e segurança de dados?',
      answer:
        'Todos os dados de localização e uso são criptografados de ponta a ponta usando AES-256. Os usuários mantêm controle total sobre seus dados com opções para desabilitar sincronização na nuvem. Estamos em conformidade com os padrões da LGPD (Lei Geral de Proteção de Dados).'
    }
  ];

  // =========================================================
  // MÉTODOS (AÇÕES DA INTERFACE)
  // =========================================================

  /** Imagens do carrossel de comparação conforme o produto selecionado. */
  get comparisonSlides(): Slide[] {
    return this.productSlides[this.activeTab];
  }

  /** Conteúdo dinâmico do formulário de contato (PF ou PJ). */
  get contactContent() {
    if (this.contactType === 'fisica') {
      return {
        title: 'Seja Nosso Cliente',
        subtitle: 'Entre em contato para saber mais sobre nossas tecnologias assistivas para você',
        emailLabel: 'E-mail *',
        emailPlaceholder: 'seuemail@exemplo.com',
        messagePlaceholder: 'Conte-nos como podemos ajudar você...'
      };
    }
    return {
      title: 'Seja Nosso Parceiro',
      subtitle: 'Consultas B2B para clínicas, instituições e distribuidores',
      emailLabel: 'E-mail Corporativo *',
      emailPlaceholder: 'contato@clinica.com.br',
      messagePlaceholder: 'Conte-nos sobre sua organização e como podemos ajudar...'
    };
  }

  /** Alterna entre Pessoa Física e Pessoa Jurídica. */
  selectContactType(type: 'fisica' | 'juridica'): void {
    this.contactType = type;
  }

  /** Retorna a lista de planos correspondente à aba ativa. */
  get activePlans(): PricingPlan[] {
    switch (this.activeTab) {
      case 'bengala':
        return this.plansBengala;
      case 'luva':
        return this.plansLuva;
      default:
        return this.plansKit;
    }
  }

  /** Rola suavemente até uma seção da página e fecha o menu mobile. */
  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.mobileMenuOpen = false;
    }
  }

  /** Alterna o menu mobile. */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  /** Abre o modal "Portal do Cliente". */
  openLoginModal(): void {
    this.loginModalOpen = true;
    this.mobileMenuOpen = false;
  }

  /** Troca a aba da seção de preços e reinicia o carrossel de comparação. */
  selectTab(tab: PricingTab): void {
    this.activeTab = tab;
    this.activeComparisonSlide = 0;
  }

  /** Abre/fecha uma pergunta do FAQ. */
  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
  }

  /** Navega no carrossel de comparação. */
  nextComparisonSlide(): void {
    this.activeComparisonSlide = (this.activeComparisonSlide + 1) % this.comparisonSlides.length;
  }

  prevComparisonSlide(): void {
    this.activeComparisonSlide =
      (this.activeComparisonSlide - 1 + this.comparisonSlides.length) % this.comparisonSlides.length;
  }

  /** Envio do formulário de contato B2B. */
  onContactSubmit(): void {
    alert(`Obrigado ${this.formData.name}! Nossa equipe B2B entrará em contato em até 24 horas.`);
    this.formData = { name: '', email: '', phone: '', message: '' };
  }
}
