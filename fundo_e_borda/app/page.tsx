import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Atividade 10/03</h1>
      <p>Escolha um dos links abaixo para navegar:</p>

      <Link href="/exerciciop210" style={{ color: 'blue', textDecoration: 'underline' }}>
        Ir para o Primeiro Exercício de CSS (página 210)
      </Link>
<br />

      <Link href="/exerciciop231" style={{ color: 'blue', textDecoration: 'underline' }}>
          Ir para o Segundo Exercício (página 231)
        </Link>

    <br/>
      <Link href="/exerciciop246" style={{ color: 'blue', textDecoration: 'underline' }}>
          Ir para o Terceiro Exercício (página 246)
        </Link>
        <Link href="/exerciciop263" style={{ color: 'blue', textDecoration: 'underline' }}>
          Ir para o Quarto Exercício (página 263)
        </Link>
    </main>
  );
}
