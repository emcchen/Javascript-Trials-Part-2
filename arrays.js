'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}

// console.log(printIndices(['cow', 'cat', 'dog']))


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = []

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  console.log(result)
}

// console.log(everyOtherItem(['cow', 'cat', 'dog']))

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items;
  sortedItems.sort((a, b) => a - b);
  const sortedNItems = sortedItems.slice(n);
  const reversed = sortedNItems.reverse();
  console.log(reversed)
} 


// smallestNItems( [1, 30, 4, 21, 100000], 2)

