# Class bindall

A bindall method specifically for classes.  Can dynamically bind all class methods to instance, or a select set.  

The resulting bound methods are also logged properly (unlike lodash's bindall) in performance monitoring and profiling tools such as Newrelic or nodes native profiler.nodes native profiler.

## Usage

#### Dynamic

```
const bindAll = require('class-bindall')

class MyClass {
  constructor() {
    // methodA and methodB are automatically bound to the instance
    bindAll(this)
  }

  methodA() {
    console.log('A')
  }

  methodB() {
    console.log('B')
  }
}

```

#### Manual

const bindAll = require('class-bindall')

class MyClass {
  constructor() {
    // only methodB is bound to the instance
    bindAll(this, ['methodB'])
  }

  methodA() {
    console.log('A')
  }

  methodB() {
    console.log('B')
  }
}
```
