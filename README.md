# Testing I

Manual configuration of Jest

```
npx jest --init
```

In terminal, answer the following questions:

```
The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Choose the test environment that will be used for testing » node
√ Do you want Jest to add coverage reports? ... no
√ Automatically clear mock calls and instances between every test? ... no

```

Now a new `jest.config.js` file is created and new script in `package.json` gets created.

Change the `test` script to:

```
"test": "jest --watchAll"
```

This is just a suggestion on how to structure tests and keep them close to your js files.

```
folder_with_js_files
  > *.js

  > __test__ // folder
    *.test.js
```

When reafactoring the code, the procedure should be:

1. Change tests
2. Change the code
3. See if we pass the tests

# Mocking

For Jest to create mocks, you have to create a top level folder called `__mocks__`

Inside it, you'll have files with file names based on functions you want to mock.

For example `uuid.js` or `moment.js`. These will mock up functions that are non-deterministics or are un-pure (uuid(), moment(...)).

So `/__mocks__/uuid.js` with a code...

```
module.exports = function randomFunctionName() {
  return '123';
};
```

... will make your uuid be '123'.

This above is equivalent to:

```
// .mock takes a path to the function you want to mock (uuid is in node_modules, so it doesn't need a path)
// and it takes a callback, which returns a function that returns what you want the mock ('uuid') to return
jest.mock('uuid', () => {
  return () => '123';
});
```

## Testing async functions

`jest.useFakeTimers(` - this mocks async functions

than with `jest.runAllTimers();` inside your tests, you can 'fast-forward'your async functions (setTimeouts, requests to APIs, ...)
