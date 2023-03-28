import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AlertButton from "./components/AlertButton";
import { Routes, Route, Link } from "react-router-dom";
import TestPage from "./pages/TestPage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ApiTest from "./pages/ApiTest";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <Link className="text-secondary me-3" to="/test">
                Test
              </Link>
              <Link className="text-secondary me-3" to="/404">
                404
              </Link>
              <Link className="text-secondary me-3" to="/">
                Api Test
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav>
        <ul>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav> */}
      <div className="App">
        {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <AlertButton alertText="" /> */}

        <Routes>
          <Route path="/test" element={<TestPage />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="/" element={<ApiTest />} />
        </Routes>
        {/* </header> */}
      </div>
    </>
  );
}

export default App;
