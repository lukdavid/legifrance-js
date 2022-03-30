import { dateConverters, pad } from './date';

describe('Date utils', () => {
  describe('Pad', () => {
    it('Should pad number with zeros at expected length', () => {
      expect(pad(4, 2)).toBe('04');
    });
    it('Should just convert number to string if it has already the right length', () => {
      expect(pad(12, 2)).toBe('12');
    });
    it('Should throw an error if base number length is greater than required (padded) length', () => {
      expect(() => pad(350, 2)).toThrow(Error);
    });
  });
  describe('Converters', () => {
    it('Should convert raw date to Date format', () => {
      const date = dateConverters.fromRaw('2022-12-20');
      expect(date).toStrictEqual(new Date(2022, 11, 20));
    });
    it('Should convert date to raw format with correct paddings', () => {
      const date = new Date(2022, 3, 5);
      const raw = dateConverters.toRaw(date);
      expect(raw).toBe('2022-04-05');
    });
  });
});
