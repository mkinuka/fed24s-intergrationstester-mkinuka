import { IMovie } from "../ts/models/Movie";
import * as movieApplication from "../ts/movieApp";
import * as axiosMovies from "../ts/services/movieService";

describe("Movie app test", () => {
  let container: HTMLDivElement;
  let searchInput: HTMLInputElement;

  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = `
        <form id="searchForm">
        <input id="searchText" />
        <button id="search">Sök</button>
        </form>
        <button id="sort"></button>
        <button id="sortInc"></button>
        <div id="movie-container"></div>
        `;
    container = document.getElementById("movie-container") as HTMLDivElement;
    searchInput = document.getElementById("searchText") as HTMLInputElement;
  });

  test("it should display error message", async () => {
    jest.spyOn(axiosMovies, "getData").mockResolvedValue([]);
    let spyCreateErrorHtml = jest.spyOn(movieApplication, "displayNoResult");
    let spyCreateHtml = jest.spyOn(movieApplication, "createHtml");

    searchInput.value = "";

    await movieApplication.handleSubmit();
    expect(spyCreateHtml).not.toHaveBeenCalled();
    expect(spyCreateErrorHtml).toHaveBeenCalled();

    const errorParagraph = container?.querySelector("p");
    expect(errorParagraph?.textContent).toBe("Inga sökresultat att visa");
  });

  test("it should create html", async () => {
    const mockedData: IMovie[] = [
      {
        Title: "Movie B",
        Year: "1977",
        imdbID: "tt0076759",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Movie A",
        Year: "1980",
        imdbID: "tt0080684",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg",
      },
    ];
    jest.spyOn(axiosMovies, "getData").mockResolvedValue(mockedData);
    let spyCreateErrorHtml = jest.spyOn(movieApplication, "displayNoResult");
    let spyCreateHtml = jest.spyOn(movieApplication, "createHtml");

    searchInput.value = "star";

    await movieApplication.handleSubmit();

    expect(spyCreateHtml).toHaveBeenCalled();
    expect(spyCreateErrorHtml).not.toHaveBeenCalled();
  });
});
