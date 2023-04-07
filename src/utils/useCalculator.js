//Returing multiple values,we can use this function anywhere in this application and use the result

const useCalculator = (number1, number2) => {
  const addResult = number1 + number2;
  const subResult = number1 - number2;

  return [addResult, subResult];
};

export default useCalculator;
