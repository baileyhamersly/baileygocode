import {Link} from 'react-router-dom';

function Header() {

return <div className = "nav-bar">
    <h4 id = "site-name">baileygocode</h4>
    <div className = "nav-center">
        <ul className="nav-links">
            <Link to="/"><li>Home</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
        </ul>
    </div>
</div>

}

export default Header;