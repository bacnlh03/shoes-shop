export const formatCash = (num) => {
  return num.toString().split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev;
  });
};