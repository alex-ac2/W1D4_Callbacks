function findWaldo(arr, found) {
  arr.forEach( (element, dex) => {
    if (element.toLowerCase() === "waldo") {
      found(dex);   // execute callback
    }
  });
}

//function actionWhenFound(index) {
//}

findWaldo(["Alice", "Bob","Waldo", "Winston"], function(result) {
  console.log("Found him! using nameless function!" + "at index: " + result);
});
