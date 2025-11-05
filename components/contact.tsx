'use client'
import React from 'react'

export default function Contact() {
  function handleConnect(e?: React.FormEvent) {
    e?.preventDefault()
    alert('Formulário de contato em desenvolvimento.')
  }

  return (
    <footer className="contact" role="contentinfo" aria-labelledby="contact-title">
      <div className="contact-wrap">
        <div className="contact-image" aria-hidden="true">
          <img src="https://wallpapercave.com/wp/wp7802840.jpg" alt="Equipe reunida" />
        </div>

        <div className="contact-content">
          <h2 id="contact-title">Vamos começar uma conversa</h2>

          <div className="contact-grid" role="group" aria-label="Informações de contato">
            <div>
              <p>
                <strong>Telefone:</strong>
                <br />
                123-456-7890
              </p>
              <p>
                <strong>Endereço:</strong>
                <br />
                123 Anywhere St. Any City, ST 12345
              </p>
            </div>

            <div>
              <p>
                <strong>Email:</strong>
                <br />
                hello@impactacademy.com
              </p>
              <p>
                <strong>Redes Sociais:</strong>
                <br />
                @impactacademy
              </p>
            </div>
          </div>

          <button className="connect-btn" id="btn-connect" onClick={handleConnect}>
            CONECTE-SE
          </button>
        </div>
      </div>
    </footer>
  )
}
