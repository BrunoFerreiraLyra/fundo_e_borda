import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Atividade 10/03</h1>
      <p>Escolha um dos links abaixo para navegar:</p>

      <Link href="/exerciciop210" style={{ color: 'blue', textDecoration: 'underline' }}>
        Ir para o Primeiro Exercício de CSS
      </Link>
    </main>
  );
}