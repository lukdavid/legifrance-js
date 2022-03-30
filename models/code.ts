import Section from './section';
import { dateConverters } from '../utils/date';

export interface CodeRaw extends Section {
  nature: string;
  dateDebutVersion: string;
  dateFinVersion: string;
  modifDate: string;
}

class Code extends Section {
  nature: string;

  dateDebutVersion: Date;

  dateFinVersion: Date;

  modifDate: Date;

  constructor(raw: CodeRaw) {
    super(raw);
    this.nature = raw.nature;
    this.modifDate = dateConverters.fromRaw(raw.modifDate);
    this.dateDebutVersion = dateConverters.fromRaw(raw.dateDebutVersion);
    this.dateFinVersion = dateConverters.fromRaw(raw.dateFinVersion);
  }
}

export default Code;
