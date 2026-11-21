function Button({children,onClick,type='button',variant='primary',text}) {
    return (
        <button 
        type={type} 
        className={`btn btn- ${variant}`} 
        onClick={onClick}
        >
            {text}
        </button>);
}
export default Button;