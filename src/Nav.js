import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Nav">
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="leaderboard">Leaderboard</Link></li>
                <li><Link to="community">Community</Link></li>
                <li><Link to="about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav