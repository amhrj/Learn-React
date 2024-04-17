import { Link, useResolvedPath, useMatch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function HighlightLink(props) {
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return <Nav.Link {...props} active={match} />;
}

export default function Header(){
    return (
        <header>
            <Navbar bg="dark" expand="md" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">Self Learn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto">
                            <HighlightLink to="/" as={Link}>
                                Home
                            </HighlightLink>
                            <HighlightLink to="/CounterApplication" as={Link}>
                                Counter
                            </HighlightLink> 
                            <HighlightLink to="/FetchData" as={Link}>
                                FetchData
                            </HighlightLink>
                            <HighlightLink to="/ConditionalRendering" as={Link}>
                                ConditionalRendering
                            </HighlightLink>
                            <HighlightLink to="/ConditionalRendering2" as={Link}>
                                ConditionalRendering2
                            </HighlightLink>
                            <HighlightLink to="/PropsPractice" as={Link}>
                                Props Practice
                            </HighlightLink>
                        </Nav>     
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}