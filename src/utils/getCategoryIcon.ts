/* THIS HELPER PICK NEEDE ICON FOR NOTES */

import taskIcon from 'assets/task-icon.svg';
import ideaIcon from 'assets/idea-icon.svg';
import randomIcon from 'assets/random-icon.svg';

function getCategoryIcon(category: string): string {
  const lowerCaseCategory = category.toLocaleLowerCase();
  const firstCategoryWord = lowerCaseCategory.split(' ')[0];

  switch (firstCategoryWord) {
    case 'task':
      return taskIcon;
    case 'idea':
      return ideaIcon;
    case 'random':
      return randomIcon;
    default:
      return taskIcon;
  }
}

export default getCategoryIcon;
