export class ArrayRandomValues {
    public getRandomValues(array, lengthOfArray){
        let result: any = [];
        while (result.length < lengthOfArray) {
          let randomIndex = Math.floor(Math.random() * array.length+1);
          let randomNumber = array[randomIndex];
          if (!result.includes(randomNumber)) {
            result.push(randomNumber);
          }
        }
        console.log(result);
        return result;     
    }
}