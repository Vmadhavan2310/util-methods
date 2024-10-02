# Utilities Methods NPM Package

Welcome to the **String Utilities** package! This library provides a set of useful JavaScript methods for string manipulation, making it easier to work with text data in your projects.

## Installation

You can install the package using npm:

```sh
npm install util-methods
```

Import the method into your file and execute it once the DOM is fully loaded.

### Vanilla JS

```sh
const { methodName } = require('util-methods');
document.addEventListener('DOMContentLoaded', function() {
    utilMethods();
});
```

### React Class Component

```sh
 componentDidMount(){
      utilMethods();
    }
```
### React Functional Component

```sh
   useEffect(()=>{
        utilMethods();       
    },[])
```
### Vue Component

```sh
mounted() {
  this.utilMethods();
}
```

### reverse(str: string): string
Reverses the input string.

Example:
```sh
import utilMethods from 'util-methods';

console.log(reverse('hello')); // 'olleh'
```
### camelCase(str: string): string
Converts a string into camelCase format

Example
```sh
import utilMethods from 'util-methods';

console.log(camelCase('hello world')); // 'helloWorld'
```
### isPalindrome(str: string): boolean
Checks if the input string is a palindrome (reads the same forwards and backwards).

Example
```sh
import utilMethods from 'util-methods';

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello'));   // false
```

### stripSymbol(str: string, symbol: string): string
Removes all instances of a specified symbol from the input string.

```sh
import utilMethods from 'util-methods';

console.log(stripSymbol('hello@world!', '@')); // 'helloworld!'
```

### generateRandomString(length: number): string
Generates a random string of the specified length.

Example

```sh
import utilMethods from 'util-methods';

console.log(generateRandomString(10)); // 'a1B2c3D4e5' (example output)
```

