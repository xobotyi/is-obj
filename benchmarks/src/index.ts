import { run } from './run';
import { isObj as localIsObj } from '../..';
import isObject = require('is-obj');

const showRef = false;

run(
  [
    {
      name: 'object',
      data: { foo: 'bar' },
      reference: true,
    },
  ],
  {
    'is-obj': (data) => {
      return isObject(data);
    },
    '@xobotyi/is-obj': (data) => {
      return localIsObj(data);
    }
  },
  { showRef },
);

run(
  [
    {
      name: 'array',
      data: [1, 2, 34],
      reference: true,
    },
  ],
  {
    'is-obj': (data) => {
      return isObject(data);
    },
    '@xobotyi/is-obj': (data) => {
      return localIsObj(data);
    }
  },
  { showRef },
);

run(
  [
    {
      name: 'function',
      data: () => {
      },
      reference: true,
    },
  ],
  {
    'is-obj': (data) => {
      return isObject(data);
    },
    '@xobotyi/is-obj': (data) => {
      return localIsObj(data);
    }
  },
  { showRef },
);

run(
  [
    {
      name: 'null',
      data: null,
      reference: false,
    },
  ],
  {
    'is-obj': (data) => {
      return isObject(data);
    },
    '@xobotyi/is-obj': (data) => {
      return localIsObj(data);
    }
  },
  { showRef },
);

run(
  [
    {
      name: 'boolean',
      data: true,
      reference: false,
    },
  ],
  {
    'is-obj': (data) => {
      return isObject(data);
    },
    '@xobotyi/is-obj': (data) => {
      return localIsObj(data);
    }
  },
  { showRef },
);
