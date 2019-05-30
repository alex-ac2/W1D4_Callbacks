function findWaldo(arr, found) {
  arr.forEach( (element, dex) => {
    if (element.toLowerCase() === "waldo") {
      found(dex);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him! using forEach!" + "at index: " + index);
}

findWaldo(["Alice", "Bob","Waldo", "Winston"], actionWhenFound);
