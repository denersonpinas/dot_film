import { Button } from "../../components/button";
import { Navbar } from "../../components/navbar";
import poster06 from "../../assets/image/web/poster06.jpg";
import card_img from "../../assets/image/web/card_img.png";

const changePage = () => {
    return "comprar()";
}

export function Home() {
    return (
        <>
        <header className="cabecalho">
            <Navbar/>
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
                    <Button title={"ADQUIRA AGORA"} onPageChange={changePage} />
                </div>
                <div>
                </div>
            </div>
            <div>                
            </div>
        </header>
        <main>
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
                <div className="container-film">
                    <div className="content-film">
                        <img src={poster06} alt="Dia da Mulher" />
                        <h1>Envato Bottle 88</h1>
                        <p>aventura</p>
                        <hr/>
                        <div className="row">
                            <span className="atr">HD</span>
                            <span className="atr">PT-BR</span>
                            <ul className="row">
                                <li><i className={"fas fa-heart"}></i>3.5</li>
                                <li><i className={"far fa-clock"}></i>128 min</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-film">
                        <img src={poster06} alt="Dia da Mulher" />
                        <h1>Envato Bottle 88</h1>
                        <p>aventura</p>
                        <hr/>
                        <div className="row">
                            <span className="atr">HD</span>
                            <span className="atr">PT-BR</span>
                            <ul className="row">
                                <li><i className={"fas fa-heart"}></i>3.5</li>
                                <li><i className={"far fa-clock"}></i>128 min</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-film">
                        <img src={poster06} alt="Dia da Mulher" />
                        <h1>Envato Bottle 88</h1>
                        <p>aventura</p>
                        <hr/>
                        <div className="row">
                            <span className="atr">HD</span>
                            <span className="atr">PT-BR</span>
                            <ul className="row">
                                <li><i className={"fas fa-heart"}></i>3.5</li>
                                <li><i className={"far fa-clock"}></i>128 min</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-film">
                        <img src={poster06} alt="Dia da Mulher" />
                        <h1>Envato Bottle 88</h1>
                        <p>aventura</p>
                        <hr/>
                        <div className="row">
                            <span className="atr">HD</span>
                            <span className="atr">PT-BR</span>
                            <ul className="row">
                                <li><i className={"fas fa-heart"}></i>3.5</li>
                                <li><i className={"far fa-clock"}></i>128 min</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-film">
                        <img src={poster06} alt="Dia da Mulher" />
                        <h1>Envato Bottle 88</h1>
                        <p>aventura</p>
                        <hr/>
                        <div className="row">
                            <span className="atr">HD</span>
                            <span className="atr">PT-BR</span>
                            <ul className="row">
                                <li><i className={"fas fa-heart"}></i>3.5</li>
                                <li><i className={"far fa-clock"}></i>128 min</li>
                            </ul>
                        </div>
                    </div>
                </div>                
            </section>
            <section className="newslatter">
                <div>
                    <h1><span>LOCAL</span>FLIX</h1>
                    <ul>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Politica e Privacidade</li>
                    </ul>
                    <div>
                        <input type="search" name="" id="" /><label htmlFor=""><i id="search" className="fas fa-search"></i></label>
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
        <footer>            
            <p>@LOCALFILM, 2020-2021 Criado por Dênerson Pinas</p>
            <img src={card_img} alt="Pagamentos" />
        </footer>
        </>
    );
}