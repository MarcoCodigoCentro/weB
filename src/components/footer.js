
import Container from 'react-bootstrap/Container';

function AppFooter() {
  // const [showTopBtn, setShowTopBtn] = useState(false);

  // useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //         if (window.scrollY > 400) {
  //             setShowTopBtn(true);
  //         } else {
  //             setShowTopBtn(false);
  //         }
  //     });
  // }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">&copy; 2024 Codigo Centro. All Right Reserved.</div>
      <div className="socials">
        <ul>
          <li><a href="https://www.facebook.com/people/C%C3%B3digo-Inform%C3%A1tica/100082942975368/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.instagram.com/codigo.informatica/?igsh=MTZiODlrYWU2YXdzMg%3D%3D"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
      {
        (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;