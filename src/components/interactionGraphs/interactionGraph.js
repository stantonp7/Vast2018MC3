import React from 'react';
import data from '../../data/2015.json';
import { ForceGraph } from "../forceGraph/forceGraph";
import '../../App.css';

function InteractionGraph () {
  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>     
      <b>${node.name}</b>
    </div>`;
  }, []);
  return (
    <div>
      <section>
        <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />
      </section>
    </div>
  );
}

export default InteractionGraph;
