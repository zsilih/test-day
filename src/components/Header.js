import {
    Link
  } from 'react-router-dom';
const Header = () => {
    return (
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
        </header>
    )
}

export default Header
