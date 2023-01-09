import React from "react";

import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
};

export default AllQuotes;
