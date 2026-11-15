function Header(props) {

    return (
        <header className="site-header">
            <p className="header-label">Mijn Game Collectie</p>
            <h1 className="app-title">
                {props.title}
            </h1>
            <p className="header-description">
                Ontdek mijn games
            </p>
        </header>

    );

}

export default Header;