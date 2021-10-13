type Props = {
    title:string;
    subTitle:string;
    iconPrimary:string;
    iconSecondary:string
}


export function ListInfor({title, subTitle, iconPrimary, iconSecondary}:Props) {
    // far fa-calendar-alt
    // far fa-clock
    return (
        <>
            <ul className="row">
                <li><i className={iconPrimary}></i>{title}</li>
                <li><i className={iconSecondary}></i>{subTitle} min</li>
            </ul>
        </>
    );
}