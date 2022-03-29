import JuriTextCore from './juriTextCore';

export interface JuriTextRaw extends JuriTextCore {
  // jury
  siegeAppel: string | null;
  president: string | null;
  avocatGl: string | null;
  avocats: string | null;
  rapporteur: string | null;
  commissaire: string | null;
  // dates
  dateTexte: number;
  dateTexteComputed: number;
  // dispute
  decisionAttaquee?: {
    formation: string;
    date: number;
  };
}

class JuriText extends JuriTextCore {
  // jury
  jury: {
    siegeAppel?: string;
    president?: string;
    avocatGl?: string;
    avocats?: string;
    rapporteur?: string;
    commissaire?: string;
  };

  // dates
  dateTexte: Date;

  dateTexteComputed: Date;

  // dispute
  decisionAttaquee?: {
    formation: string;
    date: Date;
  };

  constructor(raw: JuriTextRaw) {
    super(raw);
    const {
      dateTexte,
      dateTexteComputed,
      decisionAttaquee,
      siegeAppel,
      president,
      avocatGl,
      avocats,
      rapporteur,
      commissaire,
    } = raw;
    this.dateTexte = new Date(dateTexte);
    this.dateTexteComputed = new Date(dateTexteComputed);
    if (decisionAttaquee) {
      this.decisionAttaquee = {
        ...decisionAttaquee,
        date: new Date(decisionAttaquee.date),
      };
    }
    this.jury = {
      siegeAppel: siegeAppel || undefined,
      president: president || undefined,
      avocatGl: avocatGl || undefined,
      avocats: avocats || undefined,
      rapporteur: rapporteur || undefined,
      commissaire: commissaire || undefined,
    };
  }
}

export default JuriText;
