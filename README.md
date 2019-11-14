### Why

- For fun
- Tutorial link: [Learn Test Driven Development <small>(in JavaScript)</small> <small>(on github)</small>](https://github.com/dwyl/learn-tdd)

### Basics

- 3-step process
  1. write a failing test
     > understand the requirements/story well enough to write a est for what you expect
  2. make the test pass
     > write _only_ the code you need to make the <small>(failing)</small>test pass<br>
     > while ensuring your existing/previous test all **still** pass
  3. refactor the code you wrote
     > tidy up the code you wrote to make it simpler for yourself and colleagues to understand

### Preparation

- We almost do not need to install anything.
- For a live server, you can install and use it by:
  1. don't need _live-reload_: `python -m http.server 9000 --bind 0.0.0.0`<br>
  2. do need it: `npm install live-server --save-dev && ./node_modules/.bin/live-server --port=8000`
- For the _code coverage_ part, a short HOWTO on `blanket` lib
  1. see [Getting Started (blanket)](https://github.com/alex-seville/blanket/blob/master/docs/getting_started_browser.md)
  2. add attr to the script you wanna run _coverage_ on: `<script src="sourceScript.js" data-cover></script>`
- For the Node.js <small>(_server-side_)</small> tests
  1. install libraries: `npm install qunitjs qunit-tap istanbul --save-dev`
  - `qunitjs`: core library
  - `qunit-tap`: for command-line output
  - `istanbul`: code coverage <small>(**_server-side_**)</small> <small>(better than _blanket_ lib)</small>
  2. actually running them
  - testing only: `npm test`
  - test coverage included
    - `./node_modules/.bin/istanbul cover TEST_FILE.js` OR `npx istanbul cover test_feauture.js`
    - after running the cmd you could see the detailed coverage report at `./coverage/../index.html`

### Issues you might encounter

- Caveats when you use `blanket` test coverage library
  - It cannot identify the _bad_ code if it was written in one line <small>(e.g. `if (..) { bad stuff }`)</small>

### Actual notes

- The _TDD_ partly mostly happen in the two `.js` files <small>(and the `index.html`)</small>.

### More

### References
