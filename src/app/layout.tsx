import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MedCoderX',
  description: 'Solo developer building innovative apps for a smarter, safer everyday life.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
