// TimeLine.js
import styles from './TimeLine.module.css';
import TitleEntry, {TitleEntryProps} from './TitleEntry';

export interface TimeLineProps {
    timelineData: TitleEntryProps[]; // Define los props necesarios para TimeLine
  }

const TimeLine: React.FC<TimeLineProps> = ({timelineData}) => {
  return (
    <div className={`${styles.timeline} bg-indigo-600 rounded-xl text-stone-950 dark:bg-neutral-900 dark:text-white`}>
      <div className={styles.entries}>
        {timelineData.map((entry: TitleEntryProps, index: number) => (
          <TitleEntry
            key={index}
            title={entry.title}
            content={entry.content}
            isBig={entry.isBig}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;