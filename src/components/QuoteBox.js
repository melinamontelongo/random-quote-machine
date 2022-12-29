import "../stylesheets/QuoteBox.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const QuoteBox = ( { quote, author }) => {
    return(
        <div className="quote-container rounded d-flex align-items-center justify-content-center row">
            <p className="quote-text text-break" id="text">
            <i className="bi bi-quote fs-3"></i> {quote}
            </p>
            <p className="quote-author text-end " id="author">
                - {author}
            </p>
        </div>
    );
};

export default QuoteBox;