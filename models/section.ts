import Etat from './etat';
import BaseReference from './baseReference';

interface SectionData {
  id: string;

  cid: string;

  etat: Etat;

  title: string;

  articles?: BaseReference[];

  sections?: SectionData[];
}

class Section implements SectionData {
  id: string;

  cid: string;

  etat: Etat;

  title: string;

  articles?: BaseReference[];

  sections?: SectionData[];

  constructor({
    id,
    cid,
    etat,
    title,
    articles,
    sections,
  }: {
    id: string;
    cid: string;
    etat: Etat;
    title: string;
    articles?: BaseReference[];
    sections?: Section[];
  }) {
    this.id = id;
    this.cid = cid;
    this.etat = etat;
    this.title = title;
    this.articles = articles;
    this.sections = sections;
  }
}

export default Section;
