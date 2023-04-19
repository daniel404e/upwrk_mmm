import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "BWSZCNGIF8",
  "a4212f0ee1185799ec70bbab52be0ac6"
);

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ExplorePage from "./pages/explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InstantSearch searchClient={searchClient} indexName="meetmymentor">
      <RouterProvider router={router} />
    </InstantSearch>
  </React.StrictMode>
);
