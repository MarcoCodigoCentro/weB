import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'Impulsa tu éxito digital',
    description: 'Desarrollo, diseño y consultoría de confianza para potenciar tu presencia en línea.',
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Innovación garantizada',
    description: 'Desde apps móviles hasta reparaciones, confía en nuestra experiencia integral en informática',
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Construyendo juntos el futuro digital',
    description: 'Soluciones expertas en software, diseño y conectividad para tu tranquilidad absoluta.',
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;