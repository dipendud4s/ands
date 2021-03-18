export default class StaticArray extends Array {
  constructor(...args: any[]) {
    super(...args);
    Object.freeze(this);
  }
}
