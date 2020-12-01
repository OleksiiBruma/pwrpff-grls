import React from "react";
import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import EpisodePage from "./EpisodePage";

describe("EpisodePage", () => {
  it("should show episode", () => {
    const episode = {
      image: "episode image",
      summary: "episode summary",
      name: "episode name",
    };

    const store = createStore(
      (state) => state,
      {
        app: {
          loading: false,
        },
      },
    );
    const requestEpisode = jest.fn();

    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <EpisodePage requestEpisode={requestEpisode} episode={episode} />
        </Provider>
      </Router>,
    );

    expect(screen.getByText(episode.name)).toBeInTheDocument();
    expect(screen.getByText(episode.summary)).toBeInTheDocument();
    expect(getByTestId("image")).toHaveAttribute("src", episode.image);
    expect(getByTestId("image")).toHaveAttribute(
      "alt",
      `${episode.name} cover`,
    );
  });

  it("should dispatch action for requesting episode", () => {
    const store = createStore(
      (state) => state,
      {
        app: {
          loading: false,
        },
      },
    );
    const episode = {
      image: "episode image",
      summary: "episode summary",
      name: "episode name",
    };
    const requestEpisode = jest.fn();

    render(
      <Router>
        <Provider store={store}>
          <EpisodePage episode={episode} requestEpisode={requestEpisode} />
        </Provider>
      </Router>,
    );
    expect(requestEpisode).toHaveBeenCalledTimes(1);
    expect(requestEpisode).toHaveBeenCalledWith("id");
  });
});
