export function changeFormat (timeAndDate){
  const format = timeAndDate?.split(" ")?.[0]?.split('-');
  return `${format[1]}-${format[2]}-${format[0]}`;
}