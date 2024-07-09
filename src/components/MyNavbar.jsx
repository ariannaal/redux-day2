import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom'


const MyNavbar = () => {

    const navigate = useNavigate()

    return (
        <>
            <Navbar className="bg-dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={() => navigate('/')}>Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#favouritejobs" onClick={() => navigate('/favourites')}>Favourite jobs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )

}

{/* <Button onClick={() => navigate('/favourites')}>Favourites</Button> */ }

export default MyNavbar;