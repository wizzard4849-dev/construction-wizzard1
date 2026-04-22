import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Wizzard',
  description: 'Estimating for Serious Builders',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
