export class DataHelper {
  static sortedData(data: { results: never[] }): never[] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.results.sort(function (aItem: any, bItem: any) {
      const convertAItemToNumber = parseInt(aItem.length.replace(/,/g, ""));
      const convertBItemToNumber = parseInt(bItem.length.replace(/,/g, ""));

      return Math.ceil(convertAItemToNumber) - Math.ceil(convertBItemToNumber);
    });
  }
}
