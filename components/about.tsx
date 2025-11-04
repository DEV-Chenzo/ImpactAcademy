import React from 'react'

export default function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <img src="https://wallpapercave.com/wp/wp7802840.jpg" alt="Equipe" className="about-img" />
      <div className="about-text">
        <h2 id="about-title">
          O que é a <span>Impact Academy Affiliates</span>
        </h2>
        <p>
          A Impact Academy Affiliates é uma startup educacional voltada para o desenvolvimento de
          habilidades digitais e o crescimento financeiro através do marketing de afiliados. Nosso
          propósito é unir educação de qualidade, oportunidades reais de renda e comunidade,
          criando um ecossistema onde aprender e empreender caminham lado a lado.
        </p>
      </div>
    </section>
  )
}
