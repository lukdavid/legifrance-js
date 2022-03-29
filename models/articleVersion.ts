import ArticleVersionCore from './articleVersionCore';

export interface ArticleVersionRaw extends ArticleVersionCore {
  dateDebut: number;
  dateFin: number;
}

class ArticleVersion extends ArticleVersionCore {
  dateDebut: Date;

  dateFin: Date;

  constructor(raw: ArticleVersionRaw) {
    super(raw);
    this.dateDebut = new Date(raw.dateDebut);
    this.dateFin = new Date(raw.dateFin);
  }
}

export default ArticleVersion;
