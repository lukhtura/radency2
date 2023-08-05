/* EXTRACT DATES FROM CONTENT */

function extractDates(contentText: string): string {
  const regex: RegExp = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  const datesArr = contentText.match(regex);
  const datesStr = datesArr?.join(', ');

  return datesStr || ' ';
}

export default extractDates;
