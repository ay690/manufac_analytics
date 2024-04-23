import React from "react";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
  calculateGamma,
} from "../utils/statsUtil";
import { Table } from "@mantine/core";


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

  // Render Flavonoids Table
  const renderFlavonoidsTable = () => {
    return (
      <Table withColumnBorders withTableBorder striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ textAlign: "center" }}>Measure</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Class 1</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Class 2</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Class 3</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Flavonoids Mean</Table.Td>
            {renderStatValues("Flavanoids", "Mean")}
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Flavonoids Median</Table.Td>
            {renderStatValues("Flavanoids", "Median")}
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Flavonoids Mode</Table.Td>
            {renderStatValues("Flavanoids", "Mode")}
          </Table.Tr>
        </Table.Tbody>
      </Table>
    );
  };

  // Render Gamma Table
  const renderGammaTable = () => {
    return (
      <Table withColumnBorders withTableBorder striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ textAlign: "center" }}>Measure</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Class 1</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Class 2</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Class 3</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Gamma Mean</Table.Td>
            {renderStatValues("Gamma", "Mean")}
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Gamma Median</Table.Td>
            {renderStatValues("Gamma", "Median")}
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Gamma Mode</Table.Td>
            {renderStatValues("Gamma", "Mode")}
          </Table.Tr>
        </Table.Tbody>
      </Table>
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

      return (
        <Table.Td key={`${className}-${measure}-${stat}`}>{value}</Table.Td>
      );
    });
  };

  return (
    <div>
      <h2>Wine Statistics</h2>
      <div style={{ padding: "20px" }}>
        <div>
          <h3>Flavonoids Statistics</h3>
          {renderFlavonoidsTable()}
        </div>
        <div>
          <h3>Gamma Statistics</h3>
          {renderGammaTable()}
        </div>
      </div>
    </div>
  );
};

export default WineStats;
