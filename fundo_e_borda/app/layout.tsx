export const metadata = {
  title: "Meu Site",
  description: "Projeto Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}