import { DateSolver, dayFinder } from './../src/functions.js';

describe('DateSolver', function() {

  it('should test whether a date outputs the correct day', function() {
    // let test = new Date();
    let testDay = dayFinder();
    expect(testDay).toEqual("Wednesday");
  });

});
