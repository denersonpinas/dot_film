import { CardFilm } from "../../components/cardFilm";
import { Navbar } from "../../components/navbar";

export function Home() {
    return (
      <>
        <header>
            <Navbar/>
            <div>
                <div>
                    <h6>LOCALFLIX</h6>
                    <h1>
                        Filmes, programas de TV e muito mais ilimitados.
                    </h1>
                    <div>
                        <span>PG18</span>
                        <span>HD</span>
                        <p>Romance, Drama</p>
                        <ul>
                            <li><i></i>2021</li>
                            <li><i></i>128 min</li>
                        </ul>
                    </div>
                    <button>ADIQUIRA AGORA</button>
                </div>
                <div>
                </div>
            </div>
        </header>
        <main>
            <CardFilm/>
        </main>
        <footer>
            <h1>LOCALFILM</h1>
            <p>@LOCALFILM, 2020-2021 <br /> Criado por Dênerson Pinas</p>
            <div>
                <ul>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Politica e Privacidade</li>
                </ul>
                <button>
                    <i></i>
                </button>
            </div>
        </footer>
      </>
    );
}