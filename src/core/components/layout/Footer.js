import React from 'react';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {

  return (
    <MDBFooter bgColor='light'>
      <div className='d-flex justify-content-center justify-content-lg-between p-2 border-bottom'>
        <div className='me-3 d-none d-lg-block'>
          <span>Consultez nos réseaux sociaux : </span>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ndeye-mbar-coulibaly-b377861a0/" className="me-2 link-secondary">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.linkedin.com/in/sonita-morency-27b503147/" className="me-2 link-secondary">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <MDBContainer className='text-center text-md-start mt-3'>
        <MDBRow className='mt-3'>
          <MDBCol md="4" lg="2" xl="2" className='mx-auto mb-3'>
            <h6 className='text-uppercase fw-bold mb-3'>Outils</h6>
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
          <MDBCol md="4" lg="2" xl="2" className='mx-auto mb-3'>
            <h6 className='text-uppercase fw-bold mb-3'>Liens utiles</h6>
            <p>
              <a href='#!' className='text-reset'>A propos</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-3'>
            <h6 className='text-uppercase fw-bold mb-3'>Contact</h6>
            <p>
              <MDBIcon icon="user" className="me-2" />
              Ndeye Mbar COULIBALY
            </p>
            <p>
              <MDBIcon icon="at" className="me-2" />
              n.coulibaly@ecole-ipssi.net
            </p>
            <p>
              <MDBIcon icon="user" className="me-2" />
              Sonita MORENCY
            </p>
            <p>
              <MDBIcon icon="at" className="me-2" />
              s.morency@ecole-ipssi.net
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>

  );

}


export default Footer;