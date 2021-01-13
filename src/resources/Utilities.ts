export default class Utilities {

  /*  Randomly shuffles an array  */
  static Shuffle(array: string[]): string[] {
    if (array && array.length > 0) {
      let currentIndex = array.length, temporaryValue, randomIndex

      while (0 !== currentIndex) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // Swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }
    }
    return array;
  }
}