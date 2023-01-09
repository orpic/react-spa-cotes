import React from "react";

import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Name 1",
    text: "first text first text",
  },
  {
    id: "q2",
    author: "Name 2",
    text: "second text second text",
  },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  console.log(match);
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}`}>
            Hide Comments
          </Link>
        </div>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

/// {`/quotes/${params.quoteId}/comments`} = "/quotes/:quoteId/comments" would be fine here because of path Route and not a link
