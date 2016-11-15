# uncurry-apply

uncurry-apply is yet another 'uncurry' function.


In ES2015, by using arrow function you can define curried function in simple syntax.

```
func = x => y => z => x+y+z;
```

To call above function, you can:

```
console.log(func(3)(4)(5)); // ==> 12
```

But its looks a bit strange.

By using this uncurry-apply module, you can write following way:

```
console.log(func.$(3,4,5)); // ==> 12
console.log(func(3).$(4,5)); // ==> 12
console.log(func(3)(4).$(5)); // ==> 12
```

`$` is property which returns uncurried version of the receiver function object.

The character `$` be derived from Haskell's apply operator `$`.
