import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Explorepage from "./pages/explore.jsx";

import Generalerrorpage from "./pages/generalerror.jsx";

import Scrappycodetodelete from "./pages/scrappycodetodelete";

import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "BWSZCNGIF8",
  "a4212f0ee1185799ec70bbab52be0ac6"
);

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExplorePage from "./pages/explore-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/generalerror",
    element: <Generalerrorpage />,
  },

  {
    path: "/explore",
    element: <ExplorePage />,
  },

  {
    path: "/scrappycodetodelete",
    element: <Scrappycodetodelete />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InstantSearch searchClient={searchClient} indexName="meetmymentor">
      <RouterProvider router={router} />
    </InstantSearch>
  </React.StrictMode>
);
