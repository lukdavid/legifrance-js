interface SectionData {
  cid: string;
  etat: string; // TODO : get options, at least "VIGUEUR" | "MODIFIE" | "ABROGE"
  id: string;
  titre: string;
}

interface LinkData {
  textCid: string;
  textTitle: string;
  linkType: string;
  articleNum: string;
  articleId: string;
  natureText: string;
  linkOrientation: 'source' | 'cible';
}

class ArticleVersionCore {
  context: {
    titresTM: SectionData[];
    titreTxt: SectionData;
  };

  etat: string;

  id: string;

  lienAutres: LinkData[];

  lienCitations: LinkData[];

  lienConcordes: LinkData[];

  lienModifications: LinkData[];

  num: string;

  origine: string;

  texte: string;

  texteHtml: string;

  type: string;

  versionArticle: string;

  constructor({
    context,
    etat,
    id,
    lienAutres,
    lienCitations,
    lienConcordes,
    lienModifications,
    num,
    origine,
    texte,
    texteHtml,
    type,
    versionArticle,
  }: {
    context: {
      titresTM: SectionData[];
      titreTxt: SectionData;
    };
    etat: string;
    id: string;
    lienAutres: LinkData[];
    lienCitations: LinkData[];
    lienConcordes: LinkData[];
    lienModifications: LinkData[];
    num: string;
    origine: string;
    texte: string;
    texteHtml: string;
    type: string;
    versionArticle: string;
  }) {
    this.context = context;
    this.etat = etat;
    this.id = id;
    this.lienAutres = lienAutres;
    this.lienCitations = lienCitations;
    this.lienConcordes = lienConcordes;
    this.lienModifications = lienModifications;
    this.num = num;
    this.origine = origine;
    this.texte = texte;
    this.texteHtml = texteHtml;
    this.type = type;
    this.versionArticle = versionArticle;
  }
}

export default ArticleVersionCore;
