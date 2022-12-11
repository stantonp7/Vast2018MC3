import React, { useState } from 'react';
import { ForceGraph } from "../forceGraph/forceGraph";
import '../../App.css';
import { Button, Container } from '@mui/material';
import fullData from '../../data/fullData.json';

function InteractionGraph() {

  let [filters, setFilters] = useState({
    startDate: new Date('01/01/2015'),
    endDate: new Date('12/31/2015'),
    eTypes: []
  })

  let [currentlySelectedDate, setCurrentDate] = useState('2015');

  const filterFullDataset = () => {
    const subset = 
    {
      nodes: [],
      links: [],
    }
    subset.links = fullData.links.filter(x => new Date(x.interactionDate) >= filters.startDate && new Date(x.interactionDate) <= filters.endDate);
    subset.nodes = fullData.nodes.filter(x => subset.links.filter(y => y.source == x.id || y.target == x.id)[0]);
    console.log('data: ', subset);
    return subset;
  };

  let [data, setData] = useState(filterFullDataset());

  const updateFilters = (startDate, endDate, dateTitle) => {
    filters.startDate = new Date(startDate);
    filters.endDate = new Date(endDate);

    const subset = filterFullDataset();
    setData(subset);
    setCurrentDate(dateTitle);
  }

  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>     
      <b>${node.name}</b>
    </div>`;
  }, []);
  return (
    <div>
      <span className='filterBox'>{currentlySelectedDate}</span>
      <div className='networkGraphBox'>
        {data && <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />}
      </div>
      <div className='filterBox'>
        <span>
          <Button onClick={() => updateFilters('01/01/2015', '12/31/2015', '2015')}>2015</Button>
          <Button onClick={() => updateFilters('01/01/2016', '05/31/2016', '2016 Q1-2')}>2016 Q1-2</Button>
          <Button onClick={() => updateFilters('06/01/2016', '12/31/2016', '2016 Q3-4')}>2016 Q3-4</Button>
          <Button onClick={() => updateFilters('01/01/2017', '06/1/2017', '2017-Q1-2')}>2017 Q1-2</Button>
          <Button onClick={() => updateFilters('06/01/2017', '12/31/2017', '2017 Q3-4')}>2017 Q3-4</Button>
        </span>
        <span>summary</span>
      </div>
    </div>
  );
}

export default InteractionGraph;
