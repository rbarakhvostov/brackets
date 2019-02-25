module.exports = function check(str, bracketsConfig) {
  for (let i = 0, l = bracketsConfig.length; i < l; i++) {
    bracketsConfig[i] = bracketsConfig[i].join("");   // [['(', ')'], ['[', ']']] ==> ['()', '[]'] 
  };
  
  for (;;) {
    let strForCompare = str;

    for (let i = 0, l = bracketsConfig.length; i < l; i++) {
      str = str.split(bracketsConfig[i]).join("");   // '[[()]]' ==> '[[]]' ==> '[]' ==> '' 
    };
    
    if (strForCompare === str) {   // if there are no changes in the string, then false

      for (let i = 0, l = bracketsConfig.length; i < l; i++) {
        bracketsConfig[i] = bracketsConfig[i].split("");  //for test.js
      };                                                  
      
      return false;
    };
    
    if (str === "") break;                                        
  };

  for (let i = 0, l = bracketsConfig.length; i < l; i++) {
    bracketsConfig[i] = bracketsConfig[i].split("");     //for test.js                                                       
  };                                                    
 
  return true;   
}
