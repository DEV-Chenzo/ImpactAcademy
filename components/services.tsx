import React from 'react'

const services = [
  { title: 'Marketing Digital', img: 'https://wallpapercave.com/wp/wp7802840.jpg' },
  { title: 'Ecommerce Marketing', img: 'https://wallpapercave.com/wp/wp7802840.jpg' },
  { title: 'Web Design e Desenvolvimento', img: 'https://wallpapercave.com/wp/wp7802840.jpg' }
]

export default function Services() {
  return (
    <section className="services" aria-labelledby="services-title">
      <h2 id="services-title">Nossos Serviços</h2>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service" key={i}>
            <img src={s.img} alt={s.title} />
            <p>{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
