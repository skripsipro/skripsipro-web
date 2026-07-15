import { Globe, Smartphone, Monitor, Database, Users, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export const services: Service[] = [
  {
    icon: Globe,
    title: 'Aplikasi Web',
    description: 'Pengembangan aplikasi web modern menggunakan teknologi terkini seperti React, Node.js, dan database terpercaya.',
    features: ['Responsive Design', 'Database Integration', 'Authentication System', 'Admin Dashboard'],
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    icon: Smartphone,
    title: 'Aplikasi Mobile',
    description: 'Pembuatan aplikasi mobile native dan hybrid untuk Android dan iOS dengan performa optimal.',
    features: ['Cross-platform', 'Native Performance', 'Push Notifications', 'Offline Support'],
    gradient: 'from-green-500 to-teal-600'
  },
  {
    icon: Monitor,
    title: 'Aplikasi Desktop',
    description: 'Aplikasi desktop dengan interface yang user-friendly untuk Windows, macOS, dan Linux.',
    features: ['Cross-platform', 'Modern UI/UX', 'File Management', 'System Integration'],
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: Database,
    title: 'Sistem Informasi',
    description: 'Sistem informasi terintegrasi untuk mengelola data dan proses bisnis dengan efisien.',
    features: ['Data Management', 'Reporting System', 'User Roles', 'API Integration'],
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    icon: Users,
    title: 'Konsultasi Tugas Akhir',
    description: 'Konsultasi lengkap mulai dari perencanaan, development, hingga dokumentasi tugas akhir.',
    features: ['Project Planning', 'Technical Guidance', 'Documentation', 'Presentation Prep'],
    gradient: 'from-indigo-500 to-blue-600'
  },
  {
    icon: UserCheck,
    title: 'Privat Koding One on One',
    description: 'Bimbingan coding personal dengan mentor berpengalaman untuk meningkatkan skill programming Anda.',
    features: ['Personal Mentor', 'Flexible Schedule', 'Custom Learning Path', 'Real Project Practice'],
    gradient: 'from-teal-500 to-cyan-600'
  }
];
