import PropTypes from 'prop-types';
import { StatList, StatItem, Label, Percentage, StatHeader } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {

  return (
    <section>
       {title && <StatHeader>{title}</StatHeader>}
      <StatList>
       {stats.map((stat)=>(
            <StatItem key={stat.id} random>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}

