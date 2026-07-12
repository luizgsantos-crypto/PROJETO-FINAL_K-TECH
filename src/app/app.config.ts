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

import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {
  LucideAngularModule,
  Zap,
  Hand,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  X,
  Menu,
  MapPin,
  Wifi,
  Target,
  Waves,
  Shield,
  Mail,
  PhoneCall,
  Globe,
  Eye,
  EyeOff,
  Lock,
  FileCheck
} from 'lucide-angular';

import { routes } from './app.routes';

/**
 * Configuração global da aplicação.
 * - Roteamento com rolagem suave para âncoras;
 * - Registro centralizado dos ícones Lucide usados no site.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
    ),
    importProvidersFrom(
      LucideAngularModule.pick({
        Zap,
        Hand,
        ChevronLeft,
        ChevronRight,
        ChevronDown,
        Check,
        X,
        Menu,
        MapPin,
        Wifi,
        Target,
        Waves,
        Shield,
        Mail,
        PhoneCall,
        Globe,
        Eye,
        EyeOff,
        Lock,
        FileCheck
      })
    )
  ]
};
