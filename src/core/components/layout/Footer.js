import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
            <span>Consultez nos reseaux sociaux : </span>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/ndeye-mbar-coulibaly-b377861a0/" className="me-4 link-secondary">
                <FontAwesomeIcon icon={faLinkedin} className="me-2" />
            </a>
            <a href="https://www.linkedin.com/in/sonita-morency-27b503147/" className="me-4 link-secondary">
                <FontAwesomeIcon icon={faLinkedin} className="me-2" />
            </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Outils</h6>
              <p>
                <a href='https://fr.legacy.reactjs.org/' className='text-reset'>React JS</a>
              </p>
              <p>
                <a href='https://getbootstrap.com/' className='text-reset'>Bootstrap</a>
              </p>
              <p>
                <a href='https://react-bootstrap.netlify.app/' className='text-reset'>React Bootstrap</a>
              </p>
              <p>
                <a href='https://mdbootstrap.com/' className='text-reset'>MDBootstrap</a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Liens utiles</h6>
              <p>
                <a href='#!' className='text-reset'>A propos</a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="user" className="me-2" />
                Ndeye Mbar COULIBALY
              </p>
              <p>
                <MDBIcon icon="at" className="me-3" />
                n.coulibaly@ecole-ipssi.net
              </p>
              <p>
                <MDBIcon icon="user" className="me-2" />
                Sonita Morency
              </p>
              <p>
                <MDBIcon icon="at" className="me-3" />
                s.morency@ecole-ipssi.net
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright
      </div>
    </MDBFooter>
  );
}

export default Footer;
