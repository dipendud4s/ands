import StaticArray from './StaticArray';

describe('StaticArray', () => {
  it('should create array of some length', () => {
    const arr = new StaticArray(5);
    expect(arr.length).toBe(5);
  });
  it('should create array of fixed length', () => {
    const arr = new StaticArray(5);
    expect(() => arr.push(1)).toThrow(TypeError);
  });
  it('should create array from attributes', () => {
    const arr = new StaticArray(2, 3, 4, 5);
    expect(arr.length).toBe(4);
  });
  it('should create array with same items', () => {
    const arr = new StaticArray(2, 3, 4, 5);
    expect(arr[2]).toBe(4);
  });
  it('should throw error on adding new item', () => {
    const arr = new StaticArray(2, 3, 4, 5);
    expect(() => arr.push(1)).toThrow(TypeError);
  });
  it('should throw error on modifying an item', () => {
    const arr = new StaticArray(5);
    expect(() => {
      arr[1] = 5;
    }).toThrow(TypeError);
  });
  it('should throw error on deleting an item', () => {
    const arr = new StaticArray(5);
    expect(() => {
      arr.splice(1, 1);
    }).toThrow(TypeError);
  });
});
