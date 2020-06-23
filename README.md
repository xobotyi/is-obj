<div align="center">
  <h1>@xobotyi/is-obj</h1>
  <p>Check if given value is an object</p>
  <p>
      <a href="https://travis-ci.org/xobotyi/is-obj">
          <img src="https://flat.badgen.net/travis/xobotyi/is-obj?v=2" alt="Build status"/>
      </a>
      <a href="https://www.npmjs.com/package/@xobotyi/is-obj">
          <img src="https://flat.badgen.net/npm/v/@xobotyi/is-obj?v=2" alt="NPM version"/>
      </a>
      <a href="https://www.npmjs.com/package/@xobotyi/is-obj">
          <img src="https://flat.badgen.net/npm/dw/@xobotyi/is-obj?v=2" alt="NPM weekly downloads"/>
      </a>
      <a href="https://www.npmjs.com/package/@xobotyi/is-obj">
          <img src="https://flat.badgen.net/npm/license/@xobotyi/is-obj?v=2" alt="License"/>
      </a>
      <a href="https://www.npmjs.com/package/@xobotyi/is-obj">
          <img src="https://flat.badgen.net/npm/types/@xobotyi/is-obj?v=2" alt="Types definition"/>
      </a>
      <a href="https://www.npmjs.com/package/@xobotyi/is-obj">
          <img src="https://flat.badgen.net/codacy/grade/229d8852c8e44b9ebab4652cb065cf35?v=2" alt="Codacy Code Grade"/>
      </a>
      <a href="https://www.npmjs.com/package/@xobotyi/is-obj">
          <img src="https://flat.badgen.net/codacy/coverage/229d8852c8e44b9ebab4652cb065cf35?v=2" alt="Tests LOC"/>
      </a>
    </p>
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

---

### Related projects

- [cnbuilder](https://www.npmjs.com/package/cnbuilder) - Yet another classname string builder (the fastest one)
- [@xobotyi/is-plain-obj](https://www.npmjs.com/package/@xobotyi/is-plain-obj) - Check if given value is a plain object
