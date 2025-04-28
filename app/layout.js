import './globals.css';

export const metadata = {
  title: 'Elite College',
  description: 'Welcome to Elite College',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/image/POST UTME TUTORIALS 2-1.png" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
