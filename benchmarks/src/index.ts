import { isObj as npmIsObj } from '@xobotyi/is-obj';
import { run } from './run';
import { isObj as localIsObj } from '../..';
// eslint-disable-next-line import/order
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
    '@xobotyi/is-obj [local]': (data) => {
      return localIsObj(data);
    },
    '@xobotyi/is-obj [npm]': (data) => {
      return npmIsObj(data);
    },
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
    '@xobotyi/is-obj [local]': (data) => {
      return localIsObj(data);
    },
    '@xobotyi/is-obj [npm]': (data) => {
      return npmIsObj(data);
    },
  },
  { showRef },
);

run(
  [
    {
      name: 'function',
      data: () => 123,
      reference: true,
    },
  ],
  {
    'is-obj': (data) => {
      return isObject(data);
    },
    '@xobotyi/is-obj [local]': (data) => {
      return localIsObj(data);
    },
    '@xobotyi/is-obj [npm]': (data) => {
      return npmIsObj(data);
    },
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
    '@xobotyi/is-obj [local]': (data) => {
      return localIsObj(data);
    },
    '@xobotyi/is-obj [npm]': (data) => {
      return npmIsObj(data);
    },
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
    '@xobotyi/is-obj [local]': (data) => {
      return localIsObj(data);
    },
    '@xobotyi/is-obj [npm]': (data) => {
      return npmIsObj(data);
    },
  },
  { showRef },
);
