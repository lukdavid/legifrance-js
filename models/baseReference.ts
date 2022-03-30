import Etat from './etat';

interface BaseReference {
  cid: string;
  etat: Etat;
  id: string;
  num?: string;
  titre: string;
}

export default BaseReference;
