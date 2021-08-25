function mapToNegativize(Myarray){
    let altArray = []
    Myarray.forEach(num => altArray.push(num * -1));
return altArray
};

function mapToNoChange(Myarray) {
    return Myarray;
  };


  function mapToDouble(Myarray) {
    let altArray = [];
    for (const num of Myarray) {
      altArray.push(num * 2)
    };
    return altArray;
  };

  function mapToSquare(Myarray) {
    let altArray = [];
    for (const num of Myarray) {
      altArray.push(num ** 2)
    };
    return altArray;
  };


  function reduceToTotal(Myarray, startPoint = 0) {
    let total = startPoint;
    for(const elem of Myarray) {
        total += elem;
    };

    return total;
}

function reduceToAllTrue(Myarray) {
    let value = true;
    for(const elem of Myarray) {
        if (elem == false) {
            value = false;
        };
    };
    return value;
}


function reduceToAnyTrue(Myarray) {
    let value = false;
    for(const elem of Myarray) {
        if (elem == true) {
            value = true;
        };
    };
    return value;
}