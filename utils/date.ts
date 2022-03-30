const pad = (n: number, len: number): string => {
  const ns = n.toString();
  if (ns.length > len) {
    throw new Error(
      'Raw number length cannot be greater than padded number length',
    );
  }
  return '0'.repeat(len - ns.length) + ns;
};

const dateConverters = {
  fromRaw: (raw: string): Date => {
    const [year, month, day] = raw.split('-').map((el) => parseInt(el, 10));
    return new Date(year, month - 1, day);
  },
  toRaw: (date: Date): string =>
    `${date.getFullYear()}-${pad(date.getMonth() + 1, 2)}-${pad(
      date.getDate(),
      2,
    )}`,
};

export { dateConverters, pad };
