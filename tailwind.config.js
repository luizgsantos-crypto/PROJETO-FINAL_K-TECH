/*
 * K-TECH STARTUP - PROPRIETARY AND CONFIDENTIAL
 *
 * Copyright (c) 2026 Luiz Gabriel Silva Brito Santos (K-Tech).
 * Todos os direitos reservados. 
 * AVISO LEGAL PARA AVALIACAO ACADEMICA (SENAI):
 * Este codigo-fonte e disponibilizado estritamente para fins de avaliacao
 * tecnica e academica pelo corpo docente/avaliadores do SENAI.
 * E expressamente proibida a copia, clonagem, modificacao, distribuicao, uso comercial
 * ou reproducao total ou parcial desta interface ou logica sem a autorizacao
 * previa e por escrito do fundador da K-Tech.
 *
 * Tecnologia atrelada ao Processo INPI: BR 20 2026 012104 0
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'ktech-dark': '#0B0C10',      // Fundo principal (quase preto)
        'ktech-surface': '#1A1D23',   // Cartoes e superficies elevadas
        'ktech-teal': '#45A29E',      // Cor primaria da marca
        'ktech-cyan': '#66FCF1'       // Cor de destaque (neon)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
