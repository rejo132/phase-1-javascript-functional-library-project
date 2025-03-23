// index.js

// Helper to convert collection to array for iteration
function toArray(collection) {
    return Array.isArray(collection) ? collection : Object.values(collection);
  }
  
  // 1. myEach: Iterates over collection, calls callback on each element
  function myEach(collection, callback) {
    const values = toArray(collection);
    for (let i = 0; i < values.length; i++) {
      callback(values[i]);
    }
    return collection; // Returns original collection
  }
  
  // 2. myMap: Transforms collection into new array with callback
  function myMap(collection, callback) {
    const values = toArray(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
      result.push(callback(values[i]));
    }
    return result;
  }
  
  // 3. myReduce: Reduces collection to a single value
  function myReduce(collection, callback, initialValue) {
    const values = toArray(collection);
    let accumulator = initialValue !== undefined ? initialValue : values[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < values.length; i++) {
      accumulator = callback(accumulator, values[i]);
    }
    return accumulator;
  }
  
  // 4. myFind: Finds first element where predicate returns true
  function myFind(collection, predicate) {
    const values = toArray(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i];
      }
    }
    return undefined;
  }
  
  // 5. myFilter: Returns array of elements where predicate is true
  function myFilter(collection, predicate) {
    const values = toArray(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        result.push(values[i]);
      }
    }
    return result;
  }
  
  // 6. mySize: Returns number of elements/keys in collection
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // 7. myFirst: Returns first element or first n elements
  function myFirst(collection, n) {
    const values = toArray(collection);
    if (n === undefined) {
      return values[0];
    }
    return values.slice(0, n);
  }
  
  // 8. myLast: Returns last element or last n elements
  function myLast(collection, n) {
    const values = toArray(collection);
    if (n === undefined) {
      return values[values.length - 1];
    }
    return values.slice(-n);
  }
  
  // 9. myKeys: Returns array of object's keys
  function myKeys(collection) {
    return Object.keys(collection);
  }
  
  // 10. myValues: Returns array of object's values
  function myValues(collection) {
    return Object.values(collection);
  }