const help = require('../helpers');

jest.useFakeTimers();

const user = {
  id: '123',
  fullName: 'Jack',
  age: 1,
};

describe('helpers module', () => {
  // pass in a string to describe the module and a CB

  describe('sum function', () => {
    // usually test have a result we expect to get - expect(help.sum(1, 2))
    // and a result we actually get - .toBe(3);
    // const actual = help.sum(1, 2);
    // const expected = 3;

    // SUM WITH REDUCE
    /*
    it('should sum correctly two args', () => {
      expect(help.sum(1, 2)).toBe(3);
      expect(help.sum(1, 2)).not.toBeNull();
    });

    it('should sum correctly three args', () => {
      expect(help.sum(1, 2, 8)).toBe(11);
    });
    */

    // Return object with a result key
    it('should return an object with result key', () => {
      expect(help.sum(1, 2)).toEqual({ result: 3 });
    });
  });

  describe('make user function', () => {
    it('should return an object fullname and age keys', () => {
      expect(help.makeUser('Jack', 1)).toEqual(user);
    });

    it('throws if name arg is not a string', () => {
      expect(() => help.makeUser(5, 1)).toThrow();
    });

    // Any functions that should THROW an error, should be wrapped IN A CALLBACK!
    it('throws if age arg is not a number', () => {
      expect(() => help.makeUser('Jack', '1')).toThrow();
      expect(() => help.makeUser('Jack', NaN)).toThrow(); // NaN is a 'number' type LOL
      expect(() => help.makeUser('Jack')).toThrow();
      expect(() => help.makeUser('Jack', undefined)).toThrow();
    });
  });

  describe('callWithDelay function', () => {
    const mySpy = jest.fn(); // spy function - you can ask if this fn was invoked

    it('test async function', () => {
      help.callWithDelay(mySpy);
      jest.runAllTimers();
      expect(mySpy).toHaveBeenCalled();
    });
  });

  describe('returnsPromise function', () => {
    it('resolves "even" if passed an even number', () => {
      const promise = help.returnsPromise(2);
      return expect(promise).resolves.toBe('even');
    });

    it('rejects "odd" if passed an odd number', () => {
      const promise = help.returnsPromise(3);
      return expect(promise).rejects.toBe('odd'); // with promises dont forget RETURN keyword
    });
  });

  describe('returnsPromiseWithTimeout function', () => {
    it('resolves "even" if passed an even number', () => {
      const promise = help.returnsPromise(2);
      jest.advanceTimersByTime(1001);
      return expect(promise).resolves.toBe('even');
    });

    it('rejects "odd" if passed an odd number', () => {
      const promise = help.returnsPromise(3);
      jest.advanceTimersByTime(1001);
      return expect(promise).rejects.toBe('odd'); // with promises dont forget RETURN keyword
    });
  });
});
