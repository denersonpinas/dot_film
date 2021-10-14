export function Navbar() {
    return (
        <>
            <nav className="menu-web" id="menu-web">
                <h1><span>LOCAL</span>FLIX</h1>
                <ul id="nav-menu">
                    <li>INICIO</li>
                    <li>SOBRE</li>
                    <li>CATEGORIAS</li>
                    <li>CONTATO</li>
                    <li>CARRINHO</li>
                </ul>
                <div>
                    <i id="search" className="fas fa-search"></i>
                    <button id="btn-logon" className="btn-defult">LOGIN/CADASTRAR</button>
                    <i className="fas fa-bars"></i>
                </div>              
            </nav>
        </>
    );
}

export function NavbarMobile() {
    return (
        <>
            <nav className="menu-mobile" id="menu-mobile">
                <div className="row">
                    <h1><span>LOCAL</span>FLIX</h1>                
                    <i className="fas fa-times"></i>
                </div>                
                <ul id="nav-menu">
                    <li>INICIO</li>
                    <hr/>
                    <li>SOBRE</li>
                    <hr/>
                    <li>CATEGORIAS</li>
                    <hr/>
                    <li>CONTATO</li>
                    <hr/>
                    <li>CARRINHO</li>
                    <hr/>
                    <li>LOGIN</li>
                </ul>
            </nav>
        </>
    );
}