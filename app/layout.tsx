export const metadata = {
  title: "FLUXO",
  description: "Aplicativo estilo TikTok em Next.js",
};

import BottomBar from "./feed/BottomBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "black",
          overflow: "hidden",
        }}
      >
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
