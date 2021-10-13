type Props = {
    title:string;
}

export function Span(title:Props) {
    return (
        <>
            <span className="atr">{title}</span>
        </>
    );
}