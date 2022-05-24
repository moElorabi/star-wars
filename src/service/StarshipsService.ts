import axios, { type AxiosResponse } from "axios";

export class StarshipsService {
  static getStarships(): Promise<AxiosResponse<unknown, unknown>> {
    const dataFetching = axios
      .get("https://swapi.dev/api/starships/")
      .then((response) => response)
      .then(function (result) {
        return result;
      });
    return dataFetching;
  }
}
