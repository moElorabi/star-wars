import axios, { type AxiosResponse } from "axios";

export class FilmesService {
  static getMovies(): Promise<AxiosResponse<unknown, unknown>> {
    const dataFetching = axios
      .get("https://swapi.dev/api/films/")
      .then((response) => response)
      .then(function (result) {
        return result;
      });
    return dataFetching;
  }
}
