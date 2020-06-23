<div align="center">
  <h1>@xobotyi/is-obj</h1>
  <p>Check if given value is an object</p>
</div>

---

<div align="center">❤️Please consider starring this project to show your love and support.🙌</div>

---

Returns true on all objectish values except `null`, e.g. functions, arrays, dates and so on.

#### Installation note

This package written in TypeScript and delivered with 3 versions:

- `main` field of `package.json` is pointing to transpiled ES5 version with CJS modules resolution;
- `module` field is pointing to transpiled ES5 version with ES modules resolution;
- `esnext` field is pointing to the ESNext version with ES modules resolution;

Depending on your targets you may have to use [Webpack](https://webpack.js.org/) and/or
[Babel](http://babeljs.io/) to pull untranspiled version of package.  
See some tips on wiring thing up: [https://2ality.com/2017/06/pkg-esnext.html](https://2ality.com/2017/06/pkg-esnext.html)

## Usage
```typescript
import { isObj } from "@xobotyi/is-obj";

isObj(1); // => false

isObj(()=>{}); // => true

isObj(null); // => false

isObj([1,2,3]); // => true
```
