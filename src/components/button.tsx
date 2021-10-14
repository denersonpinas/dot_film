type Props = {
    title: String;
}

export function Button({title}: Props) {
    return (
        <>
            <button className="btn-defult">
                {title}
            </button> 
        </>
    );
}