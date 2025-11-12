function evaluate(a, b) {
  if (a == b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}

function fahrToCel(f) {
  if (typeof f !== "number") {
    return false;
  }
  return ((f - 32) * 5) / 9;
}

function calculate(a, b, operator) {
  const lookUp = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b,
  };

  return lookUp[operator] ?? false;
}
