import { isObj as npmIsObj } from '@xobotyi/is-obj';
import { run } from './run';
import { isObj as localIsObj } from '../..';
// eslint-disable-next-line import/order
import isObject = require('is-obj');

const showRef = false;

run<any>(
  [
    {
      name: 'object',
      data: { foo: 'bar' },
      reference: true,
    },
    {
      name: 'array',
      data: [1, 2, 34],
      reference: true,
    },
    {
      name: 'function',
      data: () => 123,
      reference: true,
    },
    {
      name: 'null',
      data: null,
      reference: false,
    },
    {
      name: 'boolean',
      data: true,
      reference: false,
    },
  ],
  {
    'is-obj': isObject,
    '@xobotyi/is-obj [local]': localIsObj,
    '@xobotyi/is-obj [npm]': npmIsObj,
  },
  { showRef },
);
