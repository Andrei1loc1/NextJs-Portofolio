import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Andrei - Portfolio',
  description: 'Personal portfolio built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
