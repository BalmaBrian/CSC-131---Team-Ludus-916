# Automated testing with Mocha

All information and examples are coming from the javascript.info website. This How To is taken from [this example](https://javascript.info/testing-mocha).

## The Development Flow

The flow of development usually looks like this:

1. An initial spec is written, with tests for the most basic functionality.
2. An initial implementation is created.
3. To check whether it works, we run the testing framework Mocha (more details soon) that runs the spec. While the functionality is not complete, errors are displayed. We make corrections until everything works.
4. Now we have a working initial implementation with tests.
5. We add more use cases to the spec, probably not yet supported by the implementations. Tests start to fail.
6. Go to 3, update the implementation till tests give no errors.
7. Repeat steps 3-6 till the functionality is ready.

So, the development is iterative. We write the spec, implement it, make sure tests pass, then write more tests, make sure they work etc. At the end we have both a working implementation and tests for it.

## The spec in JS

```javascript
// This is an Example
describe("pow", function() {
  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });
});
```

A spec has three main building blocks that you can see above:

`describe("title", function() { ... })`
What functionality we’re describing. In our case we’re describing the function `pow`. Used to group “workers” – the `it` blocks.

`it("use case description", function() { ... })`
In the title of `it` we in a _human-readable_ way describe the particular use case, and the second argument is a function that tests it.

`assert.equal(value1, value2)`
The code inside `it` block, if the implementation is correct, should execute without errors.

Functions `assert.*` are used to check whether `pow` works as expected. Right here we’re using one of them – `assert.equal`, it compares arguments and yields an error if they are not equal. Here it checks that the result of `pow(2, 3)` equals `8`. There are other types of comparisons and checks, that we’ll add later.
