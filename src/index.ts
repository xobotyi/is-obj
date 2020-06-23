export const isObj = <T>(v: T): v is Exclude<T, Exclude<T, object | Function> | null> => {
  return (typeof v === 'object' && v !== null) || typeof v === 'function';
};
