# is
Quick helper class

## Usage

### Instance
`const is = new Is()`

### defined
`is.defined(myVar)`

### boolean
`is.boolean(2)`

### number
`is.number(42)`

### null
`is.null(null)`

### array
`is.array([ 'meh' ])`

### object
`is.object({ 'meh': true })`

### property
`is.property('meh').of({ 'meh': true })`

### greater
`is.greater(30).than(25)`

### smaller
`is.smaller(25).than(30)`

### equal
`is.equal(30).and(30)`
