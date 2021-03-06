// Sets
var s = new Set();
s.add('hello').add('goodbye').add('hello');
s.size === 2;
s.has('hello') === true;

// Maps
var m = new Map();

m.set('hello', 42);
m.set(s, 34);
m.get(s) == 34;
console.log(m);

// Map { 'hello' => 42, Set { 'hello', 'goodbye' } => 34 }
