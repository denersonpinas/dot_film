type Props = {
    title: String;
    onPageChange: Function
}

export function Button({title, onPageChange}: Props) {
    return (
        <>
            <button onClick={() => onPageChange} className="btn-defult">
                {title}
            </button> 
        </>
    );
}