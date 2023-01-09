import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

//changes url or history
//use location - info about currently loadedd url
import { useHistory, useLocation } from "react-router-dom";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  // this is a constructor function from browser
  // default javascrpit class
  const queryParams = new URLSearchParams(location.search);

  const isSortingAcsending = queryParams.get("sort") === "asc";
  // console.log(location);
  const sortedQuotes = sortQuotes(props.quotes, isSortingAcsending);

  const changeSortingHandler = () => {
    // push for going back and replace for not going back

    history.push("/quotes?sort=" + (isSortingAcsending ? "desc" : "asc"));
  };

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAcsending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
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
