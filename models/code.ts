import Section from './section';
import { dateConverters } from '../utils/date';

interface CodeRaw extends Section {
  nature: string;
  modifDate: string;
}

class Code extends Section {
  nature: string;

  modifDate: Date;

  constructor(raw: CodeRaw) {
    super(raw);
    this.nature = raw.nature;
    this.modifDate = dateConverters.fromRaw(raw.modifDate);
  }
}

export default Code;
