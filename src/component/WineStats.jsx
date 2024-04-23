import React from "react";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
  calculateGamma,
} from "../utils/statsUtil";
import "../App.css";

const WineStats = ({ data }) => {
  // Calculate statistics for each class
  const classStats = {};
  data.forEach((item) => {
    const alcoholClass = `Class ${item.Alcohol}`;
    if (!classStats[alcoholClass]) {
      classStats[alcoholClass] = [];
    }
    classStats[alcoholClass].push(item);
  });

  // Render Flavonoids table
  const renderFlavonoidsTable = () => {
    return (
      <table className="stats-table">
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavonoids Mean</td>
            {renderStatValues("Flavanoids", "Mean")}
          </tr>
          <tr>
            <td>Flavonoids Median</td>
            {renderStatValues("Flavanoids", "Median")}
          </tr>
          <tr>
            <td>Flavonoids Mode</td>
            {renderStatValues("Flavanoids", "Mode")}
          </tr>
        </tbody>
      </table>
    );
  };

  // Render Gamma table
  const renderGammaTable = () => {
    return (
      <table className="stats-table">
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            {renderStatValues("Gamma", "Mean")}
          </tr>
          <tr>
            <td>Gamma Median</td>
            {renderStatValues("Gamma", "Median")}
          </tr>
          <tr>
            <td>Gamma Mode</td>
            {renderStatValues("Gamma", "Mode")}
          </tr>
        </tbody>
      </table>
    );
  };

  // Render statistic values for each class
  const renderStatValues = (measure, stat) => {
    return Object.keys(classStats).map((className) => {
      const classData = classStats[className];
      const dataValues = classData.map((item) => {
        if (measure === "Flavanoids") {
          return item.Flavanoids;
        } else if (measure === "Gamma") {
          return calculateGamma(item);
        }
        return null;
      });

      let value;
      if (stat === "Mean") {
        value = calculateMean(dataValues).toFixed(3);
      } else if (stat === "Median") {
        value = calculateMedian(dataValues).toFixed(3);
      } else if (stat === "Mode") {
        value = calculateMode(dataValues)
          ? parseFloat(calculateMode(dataValues)).toFixed(3)
          : "N/A";
      }

      return <td key={`${className}-${measure}-${stat}`}>{value}</td>;
    });
  };

  return (
    <div>
      <h2>Wine Statistics</h2>
      <div className="table-container">
        <div className="table-wrapper">
          <h3>Flavonoids Statistics</h3>
          {renderFlavonoidsTable()}
        </div>
        <div className="table-wrapper">
          <h3>Gamma Statistics</h3>
          {renderGammaTable()}
        </div>
      </div>
    </div>
  );
};

export default WineStats;
