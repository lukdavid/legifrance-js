class JuriTextCore {
  formation: string;

  id: string;

  juridiction: string;

  nature: string; // TODO : define options for nature

  natureJuridiction: string;

  numeroAffaire: string[];

  texte: string;

  texteHtml: string;

  titre: string;

  titreLong: string;

  solution: string;

  constructor({
    formation,
    id,
    juridiction,
    nature,
    natureJuridiction,
    numeroAffaire,
    texte,
    texteHtml,
    titre,
    titreLong,
    solution,
  }: {
    formation: string;
    id: string;
    juridiction: string;
    nature: string; // TODO : define options for nature
    natureJuridiction: string;
    numeroAffaire: string[];
    texte: string;
    texteHtml: string;
    titre: string;
    titreLong: string;
    solution: string;
  }) {
    this.formation = formation;
    this.id = id;
    this.juridiction = juridiction;
    this.nature = nature;
    this.natureJuridiction = natureJuridiction;
    this.numeroAffaire = numeroAffaire;
    this.texte = texte;
    this.texteHtml = texteHtml;
    this.titre = titre;
    this.titreLong = titreLong;
    this.solution = solution;
  }
}

export default JuriTextCore;
