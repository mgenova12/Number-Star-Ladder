function pattern(n){                                    //takes n as parameter 
var output="1";                                         //initial output
  
for (var i = 2; i <= n; i++) {                          //start looping at 2. loop until it reaches n. increment by 1.
      output += "<br>" + 1 + Array(i).join("*") + i;    // add line break. add 1 as first digit. Create Array that adds * for the current increment i                                                  
  }                                                     //i or current increment is added to the end. saved into output variable
 return output;                                         //output is returned               
}

document.write(pattern(20));