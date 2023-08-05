// THIS FUNCTION COUNTS STATISTIC OF CATEGORIS, ARCHIVED NAD ACTIVE NOTEs
// core
import { v4 as uuid } from 'uuid';

// types
import { NoteData } from 'types';

interface CategoryStats {
  [category: string]: {
    id: string;
    icon: string;
    title: string;
    active: number;
    archived: number;
  };
}

function extractCategoriesData(notesArr: NoteData[]) {
  const categoryStats: CategoryStats = {};

  notesArr.forEach((item) => {
    if (!categoryStats[item.category]) {
      categoryStats[item.category] = {
        id: uuid(),
        icon: item.icon,
        title: item.category,
        active: 0,
        archived: 0,
      };
    }

    if (item.isArchived) {
      categoryStats[item.category].archived++;
    } else {
      categoryStats[item.category].active++;
    }
  });

  // array of objects with statistic
  const summaryArr = Object.values(categoryStats);
  return summaryArr;
}

export default extractCategoriesData;
