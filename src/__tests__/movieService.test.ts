// import { getData } from "../ts/services/__mock__/movieService";
import { getData } from "../ts/services/movieService";
import { IMovie } from "../ts/models/Movie";
import axios from "axios";

export const mockMovieData: IMovie[] = [
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
  {
    Title: "Movie D",
    Year: "1983",
    imdbID: "tt0086190",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Movie C",
    Year: "2015",
    imdbID: "tt2488496",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
  },
  {
    Title: "Movie E",
    Year: "1999",
    imdbID: "tt0120915",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_SX300.jpg",
  },
];

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockResolvedValue({ data: { Search: mockMovieData } });

describe("movieServices test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should get data", async () => {
    const movies = await getData("star");
    expect(movies.length).toBe(5);
    expect(movies[0].imdbID).toBe("tt0076759");
  });
});
