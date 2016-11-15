# uncurry-apply

uncurry-apply is yet another 'uncurry' function.
You can call curried function in similar manner of Haskell's $(apply) operator.

In ES2015, by using arrow function you can define curried function in simple syntax.

```javascript
func = x => y => z => x+y+z;
```

Also you can call above function like:

```javascript
console.log(func(3)(4)(5)); // ==> 12
```

But its looks a bit strange.

By using this uncurry-apply module, you can write following way:

```javascript
console.log(func.$(3,4,5)); // ==> 12
console.log(func(3).$(4,5)); // ==> 12
console.log(func(3)(4).$(5)); // ==> 12
console.log(func.$(3,4)(5)); // ==> 12
```

`$` is property which returns uncurried version of the receiver function object.

The character `$` be derived from Haskell's apply operator `$`.
