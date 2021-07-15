import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Col, Container, Nav, Navbar, Row, useAccordionToggle,
} from 'react-bootstrap';
import { NavLinkPath } from './enum';
import { HOME, UPLOAD_VIDEO } from './constants';

export const NavBar: FC = React.memo(() => (
  <Container fluid style={{ marginLeft: 0, marginRight: 0 }}>
    <Row style={{ marginLeft: 0, marginRight: 0 }}>
      <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Navbar
          bg="light"
          expand="md"
          variant="light"
          collapseOnSelect
          style={{ marginBottom: '30px' }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to={`${NavLinkPath.HomePage}`}>
                {HOME}
              </Nav.Link>
              <Nav.Link as={Link} to={`${NavLinkPath.UploadPage}`}>
                {UPLOAD_VIDEO}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  </Container>
));
