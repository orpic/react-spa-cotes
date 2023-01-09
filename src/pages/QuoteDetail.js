import React from "react";

import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

/// {`/quotes/${params.quoteId}/comments`} = "/quotes/:quoteId/comments" would be fine here because of path Route and not a link
