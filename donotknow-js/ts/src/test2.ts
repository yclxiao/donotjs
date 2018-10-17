type C = { a: string; b?: number };

function keepWholeObject(wholeObject: C) {
  console.log(wholeObject.b);
  let { a, b = 1001 } = wholeObject;
  console.log(b);
}

keepWholeObject({ a: "111" });
