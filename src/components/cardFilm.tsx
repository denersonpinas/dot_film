import { ListInfor } from "./listInfor";
import { Span } from "./span";

type Props = {
    img:string;
    title:string;
    subTitle:string;
    resolucao:string;
    duracao:string;
    like:string;
    iconprimary:string;
    iconSecondary:string;
}

export function CardFilm({img, title, subTitle, resolucao, duracao, like, iconprimary, iconSecondary}:Props) {
    return (
        <>
        <section>
            <div>
                <img src={img} alt={title} />
                <div>
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                </div>
                <div>
                    <Span title={resolucao}/>
                    <ListInfor title={duracao} subTitle={like} iconPrimary={iconprimary} iconSecondary={iconSecondary}/>
                </div>
            </div>
        </section>
        </>
    );
}