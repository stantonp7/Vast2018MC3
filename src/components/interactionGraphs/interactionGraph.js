import React, { useState } from 'react';
import { ForceGraph } from "../forceGraph/forceGraph";
import '../../App.css';
import { Button, Container } from '@mui/material';
import fullData from '../../data/fullData.json';

function InteractionGraph() {

  let [filters, setFilters] = useState({
    startDate: new Date('01/01/2015'),
    endDate: new Date('12/31/2015'),
    eType: null,
    isSuspicious: null
  });

  let [currentlySelectedDate, setCurrentDate] = useState('2015');
  let [suspiciousValue, setSuspiciosuValue] = useState('All');
  let [eTypeValue, setETypeValue] = useState('Interactions');

  const filterFullDataset = () => {
    const subset = 
    {
      nodes: [],
      links: [],
    }
    subset.links = fullData.links
      .filter(x => new Date(x.interactionDate) >= filters.startDate
        && new Date(x.interactionDate) <= filters.endDate)
      .filter(x => filters.isSuspicious == null || x.isSuspicious == filters.isSuspicious)
      .filter(x => filters.eType == null || x.eType == filters.eType);
    subset.nodes = fullData.nodes.filter(x => subset.links.filter(y => y.source == x.id || y.target == x.id)[0]);
    return subset;
  };

  let [data, setData] = useState(filterFullDataset());

  const updateDateFilters = (startDate, endDate, dateTitle) => {
    filters.startDate = new Date(startDate);
    filters.endDate = new Date(endDate);
    setCurrentDate(dateTitle);

    const subset = filterFullDataset();
    setData(subset);
  }

  const updateIsSuspiciousFilter = (isSuspicious) => {
    filters.isSuspicious = isSuspicious;
    if (isSuspicious == true) {
      setSuspiciosuValue('Suspicious');
    } else if (isSuspicious == false) {
      setSuspiciosuValue('Not Suspicious')
    } else {
      setSuspiciosuValue('All');
    }
    const subset = filterFullDataset();
    setData(subset);
  }

  const updateETypeFilter = (eType) => {

    filters.eType = eType?.toLowerCase();
    setETypeValue(eType);

    const subset = filterFullDataset();
    setData(subset);
  }

  const nodeHoverTooltip = React.useCallback((node, links) => {
    const edges = links.filter(x => x.source.id == node.id || x.target.id == node.id);
    return `<div>     
      <div><b>${node.name}</b></div>
      <div>Total: ${edges.length}
      <div>Suspicious: ${edges.filter(x => x.isSuspicious).length}
      </div>`;
  }, []);
  return (
    <div>
      <span className='filterBox'>{currentlySelectedDate} - {suspiciousValue} { eTypeValue ?? 'Interactions' }</span>
      <div className='networkGraphBox'>
        {data && <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />}
      </div>
      <div className='filterBox'>
        <span>
          <div>
            <Button onClick={() => updateDateFilters('01/01/2015', '12/31/2015', '2015')}>2015</Button>
            <Button onClick={() => updateDateFilters('01/01/2016', '05/31/2016', '2016 Q1-2')}>2016 Q1-2</Button>
            <Button onClick={() => updateDateFilters('06/01/2016', '12/31/2016', '2016 Q3-4')}>2016 Q3-4</Button>
            <Button onClick={() => updateDateFilters('01/01/2017', '06/1/2017', '2017-Q1-2')}>2017 Q1-2</Button>
            <Button onClick={() => updateDateFilters('06/01/2017', '12/31/2017', '2017 Q3-4')}>2017 Q3-4</Button>              
          </div>
          <div>
            <Button onClick={() => updateIsSuspiciousFilter(true)}>Is Suspicious</Button>
            <Button onClick={() => updateIsSuspiciousFilter(false)}>Not Suspicious</Button>
            <Button onClick={() => updateIsSuspiciousFilter(null)}>Any</Button>
            |
            <Button onClick={() => updateETypeFilter('Purchases')}>Purchases</Button>
            <Button onClick={() => updateETypeFilter('Calls')}>Calls</Button>
            <Button onClick={() => updateETypeFilter('Emails')}>Emails</Button>
            <Button onClick={() => updateETypeFilter('Meetings')}>Meetings</Button>
            <Button onClick={() => updateETypeFilter(null)}>Any</Button>
          </div>
        </span>
        <span className='summaryBox'>
          <div>Total Interactions: {data.links.length}</div>
          <div>Total Suspicious Interactions: {data.links.filter(x => x.isSuspicious).length}</div>
        </span>
      </div>
    </div>
  );
}

export default InteractionGraph;
