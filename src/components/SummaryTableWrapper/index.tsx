// components
import TableHeader from 'components/TableHeader';
import SummaryTableItem from 'components/SummaryTableItem';

// types
import { NoteData } from 'types';

//style
import styles from 'components/SummaryTableWrapper/summaryTableWrapper.module.scss';

const headerLabels = ['Notes Category', 'Active', 'Archived'];

interface CategoryStats {
  [category: string]: {
    category: string;
    active: number;
    archived: number;
  };
}

interface SummaryTableWrapperProps {
  data: NoteData[];
}

const SummaryTableWrapper = ({ data }: SummaryTableWrapperProps) => {
  function createArrayOfSummaryObjects(notesArr: NoteData[]) {
    const categoryStats: CategoryStats = {};

    notesArr.forEach((item) => {
      if (!categoryStats[item.category]) {
        categoryStats[item.category] = {
          category: item.category,
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

  const processedData = createArrayOfSummaryObjects(data);

  return (
    <div className={styles.wrapper}>
      <TableHeader labels={headerLabels} />
      <ul>
        {processedData.map(({ category, active, archived }) => (
          <SummaryTableItem
            category={category}
            active={active}
            archived={archived}
          />
        ))}
      </ul>
    </div>
  );
};

export default SummaryTableWrapper;
