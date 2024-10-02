# String Utilities NPM Package

Welcome to the **String Utilities** package! This library provides a set of useful JavaScript methods for string manipulation, making it easier to work with text data in your projects.

## Installation

You can install the package using npm:

```sh
npm install util-methods
```

### reverse(str: string): string
Reverses the input string.

Example:
```sh
import { reverse } from 'string-utilities';

console.log(reverse('hello')); // 'olleh'
```
### camelCase(str: string): string
Converts a string into camelCase format

Example
```sh
import { camelCase } from 'string-utilities';

console.log(camelCase('hello world')); // 'helloWorld'
```
### isPalindrome(str: string): boolean
Checks if the input string is a palindrome (reads the same forwards and backwards).

Example
```sh
import { isPalindrome } from 'string-utilities';

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello'));   // false
```

### stripSymbol(str: string, symbol: string): string
Removes all instances of a specified symbol from the input string.

```sh
import { stripSymbol } from 'string-utilities';

console.log(stripSymbol('hello@world!', '@')); // 'helloworld!'
```

### generateRandomString(length: number): string
Generates a random string of the specified length.

Example

```sh
import { generateRandomString } from 'string-utilities';

console.log(generateRandomString(10)); // 'a1B2c3D4e5' (example output)
```

