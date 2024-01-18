export const DateMask = (date) => {
  return date.replace(/(\d{2})(\d{2})(\d{4})/g, '$1-$2-$3');
}