import { MOOD } from '../types/types';

const MoodList = [
  {
    id: 1,
    mood: MOOD.GRIN,
    class: `far fa-grin grin-emoji`,
  },
  {
    id: 1,
    mood: MOOD.SAD,
    class: `far fa-frown sad-emoji `,
  },
  {
    id: 3,
    mood: MOOD.HAPPY,
    class: `far fa-smile happy-emoji`,
  },
  {
    id: 4,
    mood: MOOD.NEUTRAL,
    class: `far fa-meh meh-emoji `,
  },
  {
    id: 5,
    mood: MOOD.ANGRY,
    class: `far fa-angry frown-emoji `,
  },
];

export default MoodList;