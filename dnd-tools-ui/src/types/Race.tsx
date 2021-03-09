import LoreSection from './LoreSection';
import Quote from './Quote';

type Race = {
  id: string,
  name: string,
  image: {
    url: string,
  },
  quote: Quote,
  description: string,
  loreSections: LoreSection[],
};

export default Race;
