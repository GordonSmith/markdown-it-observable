# Tests

_Testing the rendering of observablehq notebooks in markdown._

## Test inline

1. js eval=false

```js eval=false
const a = ${mol};
```

2. js

```js
mol = 40 + 2;
```

3. js echo

```js echo
molEcho = 39 + 3;
```

4. js hidden

```js hidden
molHidden = 38 + 4;
```

<!-- a ${ Plot.rectY({length: 10000}, Plot.binX({y: "count"}, {x: d3.randomNormal()})).plot() } b -->

