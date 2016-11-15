function uncurry(func) {
    return new Proxy(func,
                     {
                         apply(target, thisArg, argsList) {
                             return argsList.reduce((last, arg)=>{
                                 return last.call(thisArg, arg);
                             }, target);
                         }
                     }
                    );
};

Object.defineProperty(Function.prototype, "$", {
    get: function() {return uncurry(this); }
});
