//import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import ProfileHeader from "./ProfileHeader"


const Header = () => {
    return (
        /*
        <header>
            <h1>Test Day</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/images">Images</Link>
                </li>
                <li>
                    <Link to="/rss">RSS</Link>
                </li>
            </ul>
        </header>*/
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Mord OS</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Profile</Nav.Link>
                    <Nav.Link href="/notes">Notes</Nav.Link>
                    <Nav.Link href="/images">Images</Nav.Link>
                    <Nav.Link href="/rss">RSS</Nav.Link>
                </Nav>
                    <Navbar.Text>
                        <ProfileHeader></ProfileHeader>
                    </Navbar.Text>
                <LoginButton></LoginButton>
                <LogoutButton></LogoutButton>
            </Navbar>
    )
}

export default Header
