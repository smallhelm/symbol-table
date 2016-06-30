# symbol-table

[![build status](https://secure.travis-ci.org/smallhelm/symbol-table.svg)](https://travis-ci.org/smallhelm/symbol-table)

A data structure for tracking symbols in a compiler or interpreter.

```js
var SymbolTable = require('symbol-table');

//create the root scope
var s0 = SymbolTable();

//define some symbols
s0.set('a', 1);
s0.set('b', 2);

//now enter a sub-scope that inherits s0
var s1 = s0.push();

//define/override symbols in the new scope
s1.set('b', 200);
s1.set('c', 300);

//s1 inherited 'a'
s1.get('a');
//-> 1

//s1 changed 'b'
s1.get('b');
//-> 200
//but s0 'b' was not touched
s0.get('b');
//-> 2

//s1 has 'c', but s0 does not
s1.has('c');
//-> true
s0.has('c');
//-> false
```

## API
### s = SymbolTable()
Creates a new symbol table.

### s.has(symbol)
Returns true if the symbol is in scope.

### val = s.get(symbol)
Returns the value associated with that symbol in scope. Returns undefined if not found.

### s.set(symbol, val)
Set the value associated with symbol. This can be anything you want. It can be another data structure if you need to store symbol values and type information for example.

### s.unset(symbol)
Remove a symbol from a scope

### s2 = s.push()
Return a new scope that inherits the current scope.

## License
MIT
