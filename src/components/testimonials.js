import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'Caudete Gestion y Asesoramiento SL',
    description: '"Son unos grandes profesinales, eficaz, atentos y responsables. Los servicios que prestan son sobresalientes. Super contenta y satisfecha"',
    designation: 'Maria Soledad'
  },
  {
    id: 2,
    name: 'Cooperativa Del Campo San Isidro',
    description: '"Atención sobresaliente al publico, servicios actuales y en prestación autenticos, servicios informaticos rapidos y seguros ante todo, amabilidad por las nueves mas bien altas"',
    designation: 'Jorge García'
  },
  {
    id: 3,
    name: 'Unichen',
    description: 'Buena atención, trato cercano y eficaz en la resolución de problemas. 100% recomendable',
    designation: 'Equipo administrativo Unichen'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Opiniones de nuestros clientes</h2>
          <div className="subtitle">¿Qué opinan nuestros clientes sobre nosotros?</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;