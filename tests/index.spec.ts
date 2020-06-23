import { isObj } from '../src';

describe('isObj', () => {
  it('should be defined', () => {
    expect(isObj).toBeDefined();
  });

  it('should return true on functions', () => {
    expect(isObj(() => 123)).toBe(true);
  });

  it('should return true on objects', () => {
    expect(isObj({})).toBe(true);
    expect(isObj(new Date())).toBe(true);
    expect(isObj([])).toBe(true);
    expect(isObj(/test/gi)).toBe(true);
  });

  it('should return false on null', () => {
    expect(isObj(null)).toBe(false);
  });

  it('should return false on non-object primitives', () => {
    expect(isObj(1)).toBe(false);
    expect(isObj('hello there!')).toBe(false);
    expect(isObj(true)).toBe(false);
    expect(isObj(undefined)).toBe(false);
    expect(isObj(Symbol('foo'))).toBe(false);
  });
});
