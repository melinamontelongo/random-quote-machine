import "../stylesheets/Button.css";
const Button = ({ text, type, handleClick }) => {
    const nextBtn = 
        <button className="button-new btn btn-dark me-2 shadow" onClick={handleClick} id="new-quote">
            {text}
        </button>
    const tweetBtn = 
        <a className="button-tweet btn btn-dark me-2 shadow" href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote">
            {text}
        </a>
    return type === "next" ? nextBtn : tweetBtn
}

export default Button;