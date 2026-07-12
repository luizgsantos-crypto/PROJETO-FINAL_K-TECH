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

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Ponto de entrada da aplicação.
 * Inicializa o componente raiz (AppComponent) com a configuração global.
 */
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error('[K-Tech] Falha ao inicializar a aplicação:', err)
);
