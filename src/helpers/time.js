export const ONE_SECOND = 1000;

export const seconds = numberOfSeconds => numberOfSeconds * ONE_SECOND;

export const fancyWait = (callback, timer = seconds(.5)) => {
  setTimeout(callback, timer);
}