const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let str = "";

  arr.forEach((num, index) => {
    str += `... ${num}°C in ${index + 1} days `;
  });

  console.log(str);
};

printForecast(data1);
printForecast(data2);
