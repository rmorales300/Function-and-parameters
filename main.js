let car = {
    make: 'Toyota',
    model: 'Tundra',
    year: 2019,
    color: 'Grey',
    startEngine: function() {
      console.log("Engine started");
    }
  };
  
  function multiply(a, b) {
    return a * b;
  }
  
  function displayCarInfo(carObject) {
    const carInfo = `Car Make: ${carObject.make}, Model: ${carObject.model}, Year: ${carObject.year}, Color: ${carObject.color}`;
    console.log(carInfo);
    document.getElementById("result").innerHTML = carInfo;
  }
  
  function invokeFunctions() {
    const result = multiply(12, 12); 
    console.log(`Multiplication Result: ${result}`);
    displayCarInfo(car); 
    car.startEngine(); 
  }
  
  document.getElementById("clickButton").addEventListener("click", function() {
    invokeFunctions();
  });
  