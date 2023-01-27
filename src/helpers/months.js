export default function months(year) {
  return {
    january: {
      month: 1,
      numDays: 31,
    },
    february: {
      month: 2,
      numDays: year % 4 === 0 ? 29 : 28,
    },
    march: {
      month: 3,
      numDays: 31,
    },
    april: {
      month: 4,
      numDays: 30,
    },
    may: {
      month: 5,
      numDays: 31,
    },
    june: {
      month: 6,
      numDays: 30,
    },
    july: {
      month: 7,
      numDays: 31,
    },
    august: {
      month: 8,
      numDays: 31,
    },
    september: {
      month: 9,
      numDays: 30,
    },
    october: {
      month: 10,
      numDays: 31,
    },
    november: {
      month: 11,
      numDays: 30,
    },
    december: {
      month: 12,
      numDays: 31,
    },
  };
}
