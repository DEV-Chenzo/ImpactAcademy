import React from 'react'

const members = [
  { name: 'Crislan Silva', role: 'CEO', img: 'https://wallpapercave.com/wp/wp7802840.jpg' },
  { name: 'Tiago Carvalho', role: 'Diretor de Segurança e Desenvolvedor', img: 'https://wallpapercave.com/wp/wp7802840.jpg' },
  { name: 'Robert Vicenzo', role: 'Designer UX/UI e Desenvolvedor', img: 'https://wallpapercave.com/wp/wp7802840.jpg' },
  { name: 'Samuel', role: 'Telemarketing', img: 'https://wallpapercave.com/wp/wp7802840.jpg' }
]

export default function Team() {
  return (
    <section className="team" aria-labelledby="team-title">
      <h2 id="team-title">Conheça nossa equipe de especialistas</h2>

      <div className="team-grid" role="list">
        {members.map((m, i) => (
          <div className="member" role="listitem" key={i}>
            <img src={m.img} alt={m.name} />
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
