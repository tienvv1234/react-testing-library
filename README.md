# Reach Testing library

- Not just a library, also a philosophy ("opinionated")

* Test your software the way users actually use it
  - Not internal implementation
* Find elements by accessibility markers, not test IDs

# RTL vs jest

- RTL

* Provides virtual DOM for tests (any time you're running tests without a browser, you need to have a virtual dom so that you can do things like click elements)

- Jest

* Test runner that
  - finds tests
  - Runs tests
  - Determines whether tests pass or fail

- jest-dom

* Comes with create-react-app
* src/setupTests.js imports it before each test, makes matchers avaiable
* DOM-base matchers
  - example: tobeVisible() or toBechecked()

# Jest

- React Testing Library helps with

* rendering components into virtual DOM
* searching virtual DOM
* Interacting with virtual DOM

### TDD (test-driven development)

- Write tests before writing code

* then write code according to "spec" set by tests

- "red-green" testing

* tests fail before code is writeen
  Why

- Make a huge difference in how it feels to write tests

* part of the coding process, not a "chore" to do at the end

- More efficient

* Re-run tests "for free" after changes

### What does react Testing library Do

- Creates virtual DOM for testing

* and utilities for interacting with DOM

- Allow testing without a browser

Types of Tests

- Unit tests

* Tests one unit of code in isolation(function, component)

- Integration tests

* How multiple units work together

- Functional Tests

* Tests a particular function of software(function that i am talking about behavior, general behaviour of your software and not one particular code function)

- Acceptance / End to end tests

* Use actual browser and server (cypress, selenium)

### Functional testing

different mindset from unit testing

- Unit Testing

* isolated: mock dependencies, test internals

- very easy to pinpoint failures
  +! Further from how users interact with software
  +! More likely to break with refactoring

* Functional testing

- include all relevant units, test behavior

* Close to how users interact with software
* Robust tests (if you refactor you code, as long as the behavior stays the same, your test should still pass)
  +! More difficult to debug failing tests

tdd vs bdd
quick detour for BDD: behavior-driven development

- Testing library encourages testing behavior over implementation
- So shouldn't we be calling this BDD instead of TDD

* actually, no.

- Bdd is very explicitly defined

* involves collaboration between alots of roles
  - developers, QA, business partners, etc
* defines process for defferent groups to interact

Accessibility and finding elements
Testing library recommends finding elements by accessibility handles

- https://testing-library.com/docs/guide-which-query/
  create-react-app's example test uses getBytext
- ok for non-interactive elements
- better: getByRole
  Roles documentation: https://www.w3.org/TR/wai-aria/#role_definitions

* some elements have built-in roles: button, a
  Can't find an element like a screen reader would?

- Then your app isn't friendly to screen readers
  much more about queries and roles later

### unit testing function

- Functions separate from components

* Used by several components
* complex logic

- Unit test if

* complex logic difficult to test via functional tests
* too many edge cases

### Discussion: When to unit test?

- When to unit test?

* replaceCamelWithSpaces is pretty simple
* could be covered by functional tests on button

- For more complicated functions, unit test help with:

* covering all possible edge cases
* determining what caused functional tests to fail

- Issue with fundctional tests:

* High-level makes them resistent to refactors
* High-level makes them difficult to diagnose2

### install eslint plugin for testing library

`npm install eslint-plugin-testing-library eslint-plugin-jest-dom`

### Styleing

### Screen query methods

command[All]ByQueryType
command:

- get: expect element to be in DOM
- query: expect element not to be in DOM
- find: expect element to appear async

[All]

- (exclude) expect only one match
- (include) expect more than one match

QueryType

- Role (most preferred)
- AltText (images)
- Text (display elements)
- Form elements
  - PlaceholderText
  - LabelText
  - DisplayValue
