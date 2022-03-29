interface SectionData {
  cid: string;
  etat: string; // TODO : get options, at least "VIGUEUR" | "MODIFIE" | "ABROGE"
  id: string;
  titre: string;
}

class ArticleVersionCore {
  context: {
    titresTM: SectionData[];
    titreTxt: SectionData;
  };

  etat: string;

  id: string;

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
    this.num = num;
    this.origine = origine;
    this.texte = texte;
    this.texteHtml = texteHtml;
    this.type = type;
    this.versionArticle = versionArticle;
  }
}

export default ArticleVersionCore;
