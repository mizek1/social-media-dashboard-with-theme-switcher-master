import Data from '../../data';
import OverviewCard from '../OverviewCard/OverviewCard';
import { OverviewContainer, OverviewTitle } from './Overview.styles';

export default function Overview() {
  function getOverviewCards() {
    return Data.map((item) =>
      item.overview.map((overviewItem) => (
        <OverviewCard
          key={overviewItem.id}
          title={overviewItem.type}
          count={overviewItem.count}
          icon={item.icon}
          todayGrow={overviewItem.today}
        />
      )),
    );
  }

  return (
    <OverviewContainer>
      <>
        <OverviewTitle>Overview - Today</OverviewTitle>
        {getOverviewCards()}
      </>
    </OverviewContainer>
  );
}
