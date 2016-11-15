require('../index');

describe('uncurry', () => {

    it('call curried function', ()=>{
        const func = x => y => z => x+y+z;
        expect(func.$(3,4,5)).toBe(12);
        expect(func.$(3,4,5)).toBe(12);
        expect(func(3).$(4,5)).toBe(12);
        expect(func(3)(4).$(5)).toBe(12);
        expect(func.$(3,4)(5)).toBe(12);
    });

    it('throws error when too many arguments are supplied', ()=>{
        const func = x => y => z => x+y+z;
        expect(() => func.$(3,4,5,6)).toThrowError(TypeError);
    });

    it('returns function in the case of partial apply', ()=>{
        const func = x => y => z => x+y+z;
        const partial = func.$(3,4);
        expect(typeof partial).toBe('function');
        expect(partial(5)).toBe(12);
    });

    it('with no argument', ()=>{
        const func = x => y => z => x+y+z;
        const uncurryWithNoArg = func.$();
        expect(typeof uncurryWithNoArg).toBe('function');
        expect(uncurryWithNoArg(3)(4)(5)).toBe(12);
    });

});
