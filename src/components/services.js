import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-mobile-phone',
    title: 'Aplicaciones Móviles',
    description: 'Transformamos tus ideas en aplicaciones móviles intuitivas y de alto rendimiento, garantizando una experiencia de usuario excepcional y resultados impactantes.'
  },
  {
    id: 2,
    icon: '	fas fa-mouse-pointer',
    title: 'Diseño web',
    description: 'Creamos sitios web dinámicos y visualmente atractivos, diseñados para destacar tu marca y optimizados para ofrecer una navegación fluida en todos los dispositivos.'
  },
  {
    id: 3,
    icon: 'fas fa-comments',
    title: 'Asesoría Informática',
    description: 'Ofrecemos orientación estratégica y soluciones adaptadas a tus necesidades tecnológicas, asegurando que cada paso que des esté respaldado por nuestra experiencia y conocimiento..'
  },
  {
    id: 4,
    icon: 'fas fa-palette',
    title: 'Diseño Gráfico',
    description: 'Nuestros diseñadores profesionales crean elementos visuales cautivadores que reflejan la esencia de tu marca, garantizando una presencia visual única y memorable en todos tus materiales..'
  },
  {
    id: 5,
    icon: 'fas fa-laptop-medical',
    title: 'Especialistas en Sistemas Informáticos',
    description: 'Con un enfoque centrado en la fiabilidad y la eficiencia, brindamos soluciones informáticas completas y robustas para optimizar tus operaciones y garantizar un funcionamiento sin problemas.'
  },
  {
    id: 6,
    icon: 'fas fa-wifi',
    title: 'Servicios de Internet de Confianza',
    description: 'Nuestra experiencia en servicios de internet garantiza una conexión rápida y segura en todo momento, respaldada por profesionales dedicados a mantener tu red en óptimas condiciones.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nuestros servicios</h2>
          <div className="subtitle">Nos empecializamos en:</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;