var test = require('tape');
var SymbolTable = require('./');

test('it', function(t){

  var s0 = SymbolTable();
  s0.set('a', 1);
  s0.set('b', 2);

  t.equals(s0.has('a'), true);
  t.equals(s0.has('b'), true);
  t.equals(s0.has('c'), false);

  t.equals(s0.get('a'), 1);
  t.equals(s0.get('b'), 2);
  t.equals(s0.get('c'), undefined);


  var s1 = s0.push();
  s1.set('b', 200);
  s1.set('c', 300);

  t.equals(s1.has('a'), true);
  t.equals(s1.has('b'), true);
  t.equals(s1.has('c'), true);
  t.equals(s1.has('d'), false);

  t.equals(s1.get('a'), 1);
  t.equals(s1.get('b'), 200);
  t.equals(s1.get('c'), 300);
  t.equals(s1.get('d'), undefined);

  t.equals(s0.get('b'), 2);
  t.equals(s0.has('c'), false);
  t.equals(s0.get('c'), undefined);

  t.end();
});

test('unset', function(t){
  var s0 = SymbolTable();
  s0.set('a', 1);

  var s1 = s0.push();
  s1.set('a', 10);

  t.equals(s0.get('a'), 1);
  t.equals(s1.get('a'), 10);

  s0.unset('a');

  t.equals(s0.has('a'), false);
  t.equals(s0.get('a'), undefined);

  t.equals(s1.has('a'), true);
  t.equals(s1.get('a'), 10);

  t.end();
});

test('set returns the value you just set', function(t){
  var s = SymbolTable();
  t.equals(s.set('a', 1), 1);
  t.equals(s.set('a', 42), 42);
  t.equals(s.set('a', t), t);
  t.equals(s.set('a', s), s);
  t.equals(s.get('a'), s);
  t.end();
});
