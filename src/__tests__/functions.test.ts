import { movieSort } from "../ts/functions";
import { getData } from "../ts/services/movieService";

describe("Movie test sort ascending", () => {
  test("should sort movies in a increasing order", async () => {
    const movies = await getData("star");
    movieSort(movies, true);
    expect(movies.length).toBe(10);
    expect(movies[0].imdbID).toBe("tt3748528");
    expect(movies[9].imdbID).toBe("tt2527336");
  });
});

describe("Movie test sort descending", () => {
  test("should sort movies in a decreasing order", async () => {
    const movies = await getData("star");
    movieSort(movies, false);
    expect(movies.length).toBe(10);
    expect(movies[0].imdbID).toBe("tt2527336");
    expect(movies[9].imdbID).toBe("tt3748528");
  });
});
