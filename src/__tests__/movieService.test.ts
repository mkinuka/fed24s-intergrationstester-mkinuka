import { getData, mockMovieData } from "../ts/services/__mock__/movieService";

jest.mock("axios", () => {
  return {
    get: async (url: string) => {
      if (url === "") {
      }

      return new Promise((resolve) => {
        resolve({
           data: {
            Search: mockMovieData
          }
        });
      });
    },
  };
});


describe("movieServices test", () => {
    test("should get data", async () => {
        const movies = await getData("star");
        expect(movies.length).toBe(5)
        expect(movies[0].imdbID).toBe("tt0076759")
    });
});
