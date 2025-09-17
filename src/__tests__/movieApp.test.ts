import { movieSort } from "../ts/functions";
import { getData } from "../ts/services/__mock__/movieService";

describe("Movie test sort increasing", () => {
  test("should sort movies in a increasing order", async () => {
    const movies = await getData("star");
    movieSort(movies, true)
    expect(movies.length).toBe(5)
    expect(movies[0].imdbID).toBe("tt0080684")
    expect(movies[4].imdbID).toBe("tt0120915")
  });
});

describe("Movie test sort decreasing", () => {
  test("should sort movies in a decreasing order", async () => {
    const movies = await getData("star");
    movieSort(movies, false)
    expect(movies.length).toBe(5)
    expect(movies[4].imdbID).toBe("tt0080684")
    expect(movies[0].imdbID).toBe("tt0120915")
  });
});