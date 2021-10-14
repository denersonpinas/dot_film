
type ButtonOnClick = {
    onPageChange: Function;
}

export function Navbar(props:ButtonOnClick) {
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
                    <i onClick={() => props.onPageChange("mob")} className="fas fa-bars"></i>
                </div>              
            </nav>
        </>
    );
}

export function NavbarMobile(props:ButtonOnClick) {
    return (
        <>
            <nav className="menu-mobile" id="menu-mobile">
                <div className="row menu-topo">
                    <h1><span>LOCAL</span>FLIX</h1>                
                    <i onClick={() => props.onPageChange("web")} className="fas fa-times"></i>
                </div>                
                <ul id="nav-menu-mob">
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
                    <hr/>
                </ul>
                <div className="redes-sociais">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-whatsapp"></i>
                </div>
            </nav>
        </>
    );
}