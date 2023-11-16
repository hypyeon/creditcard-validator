## Testing
```
// First business logic:
Describe: getDigit()

Test: "When input has 16 digit of number, it will return an array of 16 numbers.";  
Code: getDigit("1111222233334444");  
Expected Output: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];  
  
Test: "When input includes element(s) that is/are not a number, window alert will pop up.";  
Code: getDigit("111122223333aaaa");
Expected Output: alert("Please provide 16 digit Credit Card number.");

Test: "When input has less or more than 16 digits, window alert will pop up.";  
Code: getDigit("111122223333");
Expected Output: alert("Please provide 16 digit Credit Card number.");

// Second business logic:
Describe: transformNum()  
  
Test: "Every other element from the left in an array will be doubled."  
Code: transformNum([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4])  
Expected Output: [1, 2, 1, 2, 2, 4, 2, 4, 3, 6, 3, 6, 4, 8, 4, 8];   

Test: "If the doubled number is larger than 9 then it will become the second digit of the doubled number."  
Code: transformNum([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 5, 5, 5, 5])  
Expected Output: [1, 2, 1, 2, 2, 4, 2, 4, 3, 6, 3, 6, 5, 0, 5, 0];   

// Third business logic:
Describe: sumOfTransformedNum()
  
Test: "It will return a total sum of all numbers in an array.";   
Code: sumOfTransformedNum([1, 2, 3, 4]);   
Expected Output: 10;   

// Fourth business logic:
Describe: validator()
  
Test: "Validating Credit Card Number based on sum of transformed digits: if the second digit does not equal to 0, it's a fail.";  
Code: validator(52)  
Expected Output: "This card number is INVALID."   
  
Test: "Validating Credit Card Number based on sum of transformed digits: if the second digit equals to 0, it's a pass.";  
Code: validator(50);  
Expected Output: "This card number is VALID.";   
```