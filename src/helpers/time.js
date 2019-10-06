export const ONE_SECOND = 1000;

export const seconds = numberOfSeconds => numberOfSeconds * ONE_SECOND;

const FANCY_WAIT_TIMER = seconds(.85);

export const fancyWait = (callback, timer = FANCY_WAIT_TIMER) => {
  setTimeout(callback, timer);
}