import card_img from "../assets/image/web/card_img.png";
import card_img240 from "../assets/image/mobile/card_img-240.png";

export function Footer() {
    return (
        <footer id="footer">            
            <p>@LOCALFILM, 2020-2021 Criado por Dênerson Pinas</p> 
            <picture>
                <source media="(max-width: 280px)" srcSet={card_img240} type="image/jpg"/>
                <img src={card_img} alt="Pagamentos" />
            </picture>
        </footer>
    );
}