
import styles from './TimeLine.module.css';

export interface TitleEntryProps {
    title: string;
    content: string[];
    isBig: boolean;
  }

const TitleEntry: React.FC<TitleEntryProps> = ({ title, content, isBig }) => {
  return (
    <div className={styles.entry}>
      <div className={`${styles.title} ${isBig ? styles.big : ''}`}>{title}</div>
      <div>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default TitleEntry;