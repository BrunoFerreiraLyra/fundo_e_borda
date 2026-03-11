export default function Exercicio4() {
  return (
    <main>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Bem-vindo à Recife Calçados</h1>

      <div className="vitrine-produtos">
        
        <div className="produto-verde">
          <img src="/imagens/nike.jpg" alt="Tênis Nike" className="img-calcado" />
          <h3>Tênis Nike</h3>
          <p>R$ 299,90</p>
        </div>

        <div className="produto-verde">
          <img src="/imagens/adidas.jpg" alt="Tênis Adidas" className="img-calcado" />
          <h3>Tênis Adidas</h3>
          <p>R$ 249,90</p>
        </div>

        <div className="produto-verde">
          <img src="/imagens/puma.jpg" alt="Tênis Puma" className="img-calcado" />
          <h3>Tênis Puma</h3>
          <p>R$ 279,90</p>
        </div>

        <div className="produto-verde">
          <img src="/imagens/underarmour.jpg" alt="Tênis Under Armour" className="img-calcado" />
          <h3>Tênis Under Armour</h3>
          <p>R$ 199,90</p>
        </div>

        <div className="produto-verde">
          <img src="/imagens/chuteiranike.jpg" alt="Chuteira de Campo" className="img-calcado" />
          <h3>Chuteira de Campo</h3>
          <p>R$ 349,90</p>
        </div>

      </div>

    
      <footer className="rodape-cinza">
        <h2>Recife Calçados</h2>
        <p>Loja de calçados.</p>
      </footer>
    </main>
  );
}