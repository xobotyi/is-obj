import { run } from './run';

const showRef = false;

run(
  [
    {
      name: 'test1',
      data: {},
      reference: 1,
    },
  ],
  {
    fn1: () => {
      return 1;
    },
    fn2: () => {
      return 2;
    }
  },
  { showRef },
);