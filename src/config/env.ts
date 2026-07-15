/**
 * EmailJS Configuration
 * 
 * Cara setup:
 * 1. Daftar akun gratis di https://www.emailjs.com/
 * 2. Buat Email Service (misal: Gmail)
 * 3. Buat Email Template dengan variable: {{name}}, {{email}}, {{phone}}, {{projectType}}, {{university}}, {{deadline}}, {{message}}
 * 4. Copy Public Key, Service ID, dan Template ID ke bawah
 * 5. Untuk newsletter, buat template terpisah dengan variable: {{email}}
 */

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
  SERVICE_ID: 'YOUR_SERVICE_ID',
  CONTACT_TEMPLATE_ID: 'YOUR_CONTACT_TEMPLATE_ID',
  NEWSLETTER_TEMPLATE_ID: 'YOUR_NEWSLETTER_TEMPLATE_ID',
};

export const SITE_CONFIG = {
  name: 'Skripsipro',
  tagline: 'Jasa Pembuatan Aplikasi untuk Tugas Akhir',
  description: 'Solusi terpercaya untuk mahasiswa yang membutuhkan aplikasi berkualitas tinggi untuk tugas akhir, skripsi, dan tesis. Konsultasi gratis!',
  url: 'https://skripsipro.com',
  whatsapp: '+6281234567890',
  email: 'info@skripsipro.com',
  social: {
    facebook: 'https://facebook.com/skripsipro',
    twitter: 'https://twitter.com/skripsipro',
    instagram: 'https://instagram.com/skripsipro',
    linkedin: 'https://linkedin.com/company/skripsipro',
    youtube: 'https://youtube.com/@skripsipro',
  }
};
