import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Container from '@/components/global/Container';

const roboto = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Leminaho Projects',
  description: 'Jari and Linda Leminaho´s project collection...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
