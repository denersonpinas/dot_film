import {films} from "../service/api";
import { Button } from "./Button";

export function CardFilm() {
    return (
        <>
        <div className="container-film">
            {films.map(film =>(
                <div  key={film.id} className="content-film">
                    <div className="foto-button">
                        <img src={film.img.default} alt={film.titulo} />
                        <Button title={"ADQUIRA AGORA"}/>
                    </div>
                    <h1>{film.titulo}</h1>
                    <p>{film.categoria}</p>
                    <hr/>
                    <div className="row">
                        <span className="atr">{film.qualidade}</span>
                        <span className="atr">{film.linguagem}</span>
                        <ul className="row">
                            <li><i className={"fas fa-heart"}></i>3.5</li>
                            <li><i className={"far fa-clock"}></i>{film.duracao} min</li>
                        </ul>
                    </div>
                </div>
            ))}           
        </div>
        </>
    );
}