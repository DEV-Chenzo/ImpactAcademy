'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  useEffect(() => {
    function adjustHeroPadding() {
      const hero = document.querySelector('.hero-inner') as HTMLElement | null
      if (!hero) return
      if (window.innerWidth < 900) hero.style.transform = 'none'
      else hero.style.transform = 'translateY(-4%)'
    }
    window.addEventListener('resize', adjustHeroPadding)
    adjustHeroPadding()
    return () => window.removeEventListener('resize', adjustHeroPadding)
  }, [])

  function handleSaiba() {
    alert('Seção "Saiba Mais" - em desenvolvimento.')
  }

  function handleConheca() {
    alert('Seção "Conheça a Empresa" - em desenvolvimento.')
  }

  return (
    <header className="hero" role="banner">
      <div className="logo">
        <Image 
          src="https://wallpapercave.com/wp/wp7802840.jpg" 
          alt="Impact Academy Logo"
          width={44}
          height={44}
          priority
        />
      </div>

      <div className="container">
        <div className="hero-inner">
          <h1>
            O Futuro da Educação Digital <span className="color-gold" >Começa Aqui!!!</span>
          </h1>

          <div className="cta" role="navigation" aria-label="Chamada para ação">
            <button className="btn btn-primary" id="btn-saiba" onClick={handleSaiba}>
              SAIBA MAIS!
            </button>
            <button className="btn btn-outline" id="btn-conheca" onClick={handleConheca}>
              <span className="color-gold">CONHEÇA A EMPRESA!</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
