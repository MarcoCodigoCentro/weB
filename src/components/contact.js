import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contacta con nosotros</h2>
        </div>
       
        <div class="contacto">
          <div class="textoContacto">
            <h3>¿Donde estamos?</h3>
            <h5>Nos encontramos en la calle Atleta Antonio Amorós nº50, Caudete.</h5>
            <h3>Horario</h3>
            <h5>De lunes a viernes de: <br></br> 10:00 a 14:00 <br></br> 16:00 20:00</h5>
            <h3>Horario telefónico</h3>
            <h5>De lunes a viernes de: <br></br> 10:00 a 14:00 <br></br> 16:00 20:00</h5>
          </div>
          <div class='google-map'>
              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.632065116474!2d-0.984603742103493!3d38.70329512563489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd615932925c0301%3A0xda742127a104e6be!2sC.%20Atleta%20Antonio%20Amor%C3%B3s%2C%2050%2C%2002660%20Caudete%2C%20Albacete!5e0!3m2!1sen!2ses!4v1710431925930!5m2!1sen!2ses"></iframe>
          </div>
        </div>

      </Container>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              admin@codigocentro.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              661939633
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Caudete, Albacete
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;