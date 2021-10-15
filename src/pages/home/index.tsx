import { Button } from "../../components/Button";
import { CardFilm } from "../../components/CardFilm";
import { Footer } from "../../components/Footer";
import { Navbar, NavbarMobile } from "../../components/Navbar";

export function Home() {

    const changeP = (props:string) => {
        if (props === 'web') {
            console.log(props === "web")
            // document.getElementById("page-cabecalho")?.setAttribute("style", "display:block;");
            document.getElementById("main")?.setAttribute("style", "display:block;");
            document.getElementById("footer")?.setAttribute("style", "display:flex;");
            document.getElementById("menu-mobile")?.setAttribute("style", "display:none;");
        } else if (props === 'mob') {
            // document.getElementById("menu-web")?.setAttribute("style", "display:none;");
            // document.querySelector("page-cabecalho")?.setAttribute("type", "disabled:true;");
            document.getElementById("main")?.setAttribute("style", "display:none;");
            document.getElementById("footer")?.setAttribute("style", "display:none;");
            document.getElementById("menu-mobile")?.setAttribute("style", "display:flex;");
        }
    }

    return (
        <>
        <header className="cabecalho">
            <Navbar onPageChange={changeP}/>
            <NavbarMobile onPageChange={changeP}/>
            <div className="page-cabecalho" id="page-cabecalho">
                <div>
                    <h6><span>LOCAL</span>FLIX</h6>
                    <h1>
                        Filmes, programas de TV e muito mais ilimitados.
                    </h1>
                    <div className="atrs">
                        <div className="row">
                            <span className="atr-esp">PG18</span>
                            <span className="atr">HD</span>
                        </div>
                        <div>
                            <p>Romance, Drama</p>
                        </div>
                        <div>
                            <ul className="row">
                                <li><i className={"far fa-calendar-alt"}></i>2021</li>
                                <li><i className={"far fa-clock"}></i>128 min</li>
                            </ul>
                        </div>                        
                    </div>
                    <Button title={"ADQUIRA AGORA"}/>
                </div>
                <div>
                </div>
            </div>
            <div>                
            </div>
        </header>
        <main id="main">
            <section className="catalogo">
                <h6>ONLINE STREAMING</h6>
                <h1>LANÇAMENTOS</h1>
                <div className="content-catalogo">
                    <hr />
                    <div className="row">
                        <button className="btn-primary" >TERROR</button>
                        <button className="btn-primary" >COMEDIA</button>
                        <button className="btn-primary" >AÇÃO</button>
                        <div className="row">
                            <span className="row btn-primary">
                                <i className="fas fa-chevron-left"></i>
                                <hr/>
                                <i className="fas fa-chevron-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <CardFilm/>      
            </section>
            <section className="newslatter">
                <div>
                    <h1><span>LOCAL</span>FLIX</h1>
                    <ul>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Politica e Privacidade</li>
                    </ul>
                    <div className="search-input">
                        <input type="search" name="" id="" /><label htmlFor=""><i className="fas fa-search"></i></label>
                    </div>
                </div>
                <hr />
                <div>
                    <ul>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Politica e Privacidade</li>
                    </ul>
                    <div className="redes-sociais">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-whatsapp"></i>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    );
}