import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

//changes url or history
import { useHistory } from "react-router-dom";

const QuoteList = (props) => {
  const history = useHistory();
  const changeSortingHandler = () => {
    // push for going back and replace for not going back
    history.push("/quotes?sort=" + "ascending");
  };

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort Ascending</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
