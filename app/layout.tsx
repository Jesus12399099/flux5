export const metadata = {
  title: "FLUX",
  description: "Aplicativo estilo TikTok feito em Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, padding: 0, background: "black" }}>
        {children}
      </body>
    </html>
  );
}
