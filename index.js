function myValues(collection) {
    // determine whether the collection is an object or an array 
    if (Array.isArray(collection)) {
        return collection;
    } else {
        // if it's an object, use a JavaScript method to create an array that contains the object's values
        return Object.values(collection);
    }
}

function myEach(collection, alert) {
    const arrayCollection = myValues(collection);
    
    // Iterates over the collection of elements, passing each element in turn to the callback function. 
    for (let i = 0; i < arrayCollection.length; i++) {
        alert(arrayCollection[i]);
    }
    
    // Returns the original, unmodified, collection.
    return collection;
}


// Produces a new array of values by mapping each value in collection through a transformation function, callback. 
function myMap(collection, callback) {
    const arrayCollection = myValues(collection);
    const newArray = [];
    
    for (let i = 0; i < arrayCollection.length; i++) {
        newArray.push(callback(arrayCollection[i]));
    }
    
    // Returns the new array without modifying the original.
    return newArray;
}


// Reduce iterates through a collection of values and boils it down into a single value. 
// acc (short for accumulator) starts at the value that's passed in as an argument, 
// and with each successive step is updated to the return value of callback. 
function myReduce(collection, callback, acc) {
    const arrayCollection = myValues(collection);
    
    if (acc === undefined) {
        // If a start value is not passed to myReduce, the first value in the collection should be used as the start value.
        acc = arrayCollection[0];

        for (let i = 1; i < arrayCollection.length; i++) {
            acc = callback(acc, arrayCollection[i]);
        }
    }
    else {
        for (let i = 0; i < arrayCollection.length; i++) {
            acc = callback(acc, arrayCollection[i])
        }
    }

    return acc;
}


function myFind(collection, predicate) {
    const arrayCollection = myValues(collection);

    for (let i = 0; i < arrayCollection.length; i++) {
        if (predicate(arrayCollection[i])) {
            return arrayCollection[i];
        }
    }

    return undefined;
}


function myFilter(collection, predicate) {
    const arrayCollection = myValues(collection);
    let newArray = [];

    for (let i = 0; i < arrayCollection.length; i++) {
        if (predicate(arrayCollection[i])) {
            newArray.push(arrayCollection[i]);
        }
    }

    return newArray;
}


function mySize(collection) {
    const arrayCollection = myValues(collection);

    return arrayCollection.length;
}


function myFirst(array, n) { 
    if (n === undefined) {
        return array[0];
    }
    else {
        return array.slice(0, n);
    }
}


function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    }
    else {
        return array.slice(-n);
    }
}


function myKeys(object) {
    return Object.keys(object);
}