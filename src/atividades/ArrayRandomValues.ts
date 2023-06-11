export class ArrayRandomValues {
  public getRandomArray(array, lengthOfArray) {
    let result: any = [];
    while (result.length < lengthOfArray) {
      let randomIndex = Math.floor(Math.random() * array.length);
      let randomObject: any = array[randomIndex];
      if (!result.includes(randomObject)) {
        result.push(randomObject);
      }
    }
    return result;
  }
}