import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import ShowPage from "./ShowPage";

describe("ShowPage", () => {
  it("should show all episodes by clicking \"Show More\" button", () => {
    const showMoreButtonTest = "Show More";
    const extraEpisodeName = "extra episode name";
    const episodes = [
      {
        id: "episode id 1",
        name: "episode name 1",
        season: 1,
        airtime: "episode airtime 1",
      },
      {
        id: "episode id 2",
        name: "episode name ",
        season: 1,
        airtime: "episode airtime ",
      },
      {
        id: "episode id 3",
        name: "episode name ",
        season: 1,
        airtime: "episode airtime ",
      },
      {
        id: "episode id 4",
        name: extraEpisodeName,
        season: 1,
        airtime: "episode airtime ",
      },
    ];
    const show = {
      image: "show image",
      summary: "show summary",
      name: "show name",
    };
    const store = createStore(
      (state) => state,
      {
        app: {
          loading: false,
        },
      },
    );
    const requestShow = jest.fn();
    const requestEpisodes = jest.fn();

    const { queryByText } = render(
      <Router>
        <Provider store={store}>
          <ShowPage
            requestShow={requestShow}
            requestEpisodes={requestEpisodes}
            show={show}
            episodes={episodes}
          />
        </Provider>
      </Router>,
    );

    expect(queryByText(extraEpisodeName)).toBeNull();
    fireEvent.click(screen.getByText(showMoreButtonTest));
    expect(queryByText(extraEpisodeName)).toBeInTheDocument();
  });

  it("should dispatch actions for requesting show end episodes", () => {
    const store = createStore(
      (state) => state,
      {
        app: {
          loading: false,
        },
      },
    );
    const requestShow = jest.fn();
    const requestEpisodes = jest.fn();

    render(
      <Router>
        <Provider store={store}>
          <ShowPage
            requestShow={requestShow}
            requestEpisodes={requestEpisodes}
          />
        </Provider>
      </Router>,
    );
    expect(requestShow).toHaveBeenCalledTimes(1);
    expect(requestShow).toHaveBeenCalledWith("id");
    expect(requestEpisodes).toHaveBeenCalledTimes(1);
    expect(requestEpisodes).toHaveBeenCalledWith("id");
  });
});
