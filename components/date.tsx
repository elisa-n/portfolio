import { parseISO, format } from 'date-fns';

type Date = {
  dateString: string;
};

export default function Date({ dateString }: Date) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>1</time>;
}
