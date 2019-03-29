import counter from '../../reducers/counter';
import actionCounter from '../../actions/counter';

describe("Counter", () => {
  describe("reducers", () => {
    it("INCREMENT counter", () => {
      expect(counter(0, {type: "INCREMENT"})).toEqual(1)
    }),
    it("INCREMENT counter", () => {
      expect(counter(1, {type: "INCREMENT"})).toEqual(2)
    }),
    it("DECREMENT counter", () => {
      expect(counter(0, {type: "DECREMENT"})).toEqual(-1)
    })
  });

  describe("actions", () => {
    it("Action test INCREMENT", () => {
      expect(actionCounter.increment(1)).toEqual({"counter": 1, "type": "INCREMENT"})
    })
  })
});
