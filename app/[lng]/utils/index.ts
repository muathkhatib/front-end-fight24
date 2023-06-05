interface DateHandler {
  year: number;
  month: number | string;
  day: number;
  hour: number;
  minutes: number;
  seconds: number;
}
export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function dateHandler(date: string | Date): DateHandler {
  const d = new Date(date);
  const day = d.getDate();
  const month = (d.getMonth() + 1).toString().padStart(2, "0"); // Add leading zero if necessary
  const year = d.getFullYear();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  return {
    year,
    month,
    day,
    hour,
    minutes,
    seconds,
  };
}
