// filter truty value from input value and join with blank
const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export { classNames };
