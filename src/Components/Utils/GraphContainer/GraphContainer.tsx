import React from "react";
import Chart from "react-google-charts";


type GraphContainerType = {
  data: Array<Array<number | string>>
}


const GraphContainer: React.FC<GraphContainerType> = ({ data }) => {

  return (
    <>
      <div style={{ display: "flex", maxWidth: 900 }}>
        <Chart
          width={600}
          height={300}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            vAxis: {
              minValue: 0,
              maxValue: 80
            }
          }}
          legendToggle
        />
      </div>
    </>
  );
};

export default GraphContainer;