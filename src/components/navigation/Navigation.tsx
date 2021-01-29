import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Navigation = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Container className='justify-content-between'>
                <Navbar.Brand className='mr-0'>Survivor List</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto ml-5'>
                        <div className='p-2'>
                            <Link href='/'>Home</Link>
                        </div>
                        <div className='p-2'>
                            <Link href='/dashboard'>Dashboard</Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}