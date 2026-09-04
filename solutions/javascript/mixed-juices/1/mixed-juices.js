// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case "Pure Strawberry Joy":
      return 0.5
      break
    case "Energizer":
      return 1.5
      break
    case "Green Garden":
      return 1.5
      break
    case "Tropical Island":
      return 3
      break
    case "All or Nothing":
      return 5
      break
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesGot = 0;
  // while (wedgesGot<=wedgesNeeded) {}
  for (var index = 0; wedgesGot < wedgesNeeded; index++) {
    if (limes[index]=='small') {
      wedgesGot+=6
    }
    else if (limes[index]=='medium') {
      wedgesGot+=8
    }
    else if(limes[index]=='large'){
      wedgesGot+=10
    }
    else{
      break
    }
  }
  return index
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeNeeded=0;
  for (var index = 0; timeLeft > timeNeeded; index++) {
    timeNeeded+=timeToMixJuice(orders[index])
  }
  return orders.slice(index, orders.length)
}
