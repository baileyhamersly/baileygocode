import Projects from '../Projects/Projects'
function Header() {

return <div className = "nav-bar">
    <h4 id = "site-name">baileygocode</h4>
    <div className = "nav-center">
        <ul class="nav-links">
            <li>
            <a href="../index.html">Home</a>
            </li>
            <Projects />
        </ul>
    </div>
</div>

}

export default Header;