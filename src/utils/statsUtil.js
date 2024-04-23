// Utility function to calculate mean
export const calculateMean = (arr) => {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
};

// Utility function to calculate median
export const calculateMedian = (arr) => {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2 === 0) {
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  }
  return sortedArr[mid];
};

// Utility function to calculate mode
export const calculateMode = (arr) => {
  const frequencyMap = {};
  arr.forEach((val) => {
    frequencyMap[val] = (frequencyMap[val] || 0) + 1;
  });
  let mode = null;
  let maxFrequency = 0;
  for (const key in frequencyMap) {
    if (frequencyMap[key] > maxFrequency) {
      mode = key;
      maxFrequency = frequencyMap[key];
    }
  }
  return mode;
};

// Function to calculate Gamma
export const calculateGamma = (item) => {
  return (item.Ash * item.Hue) / item.Magnesium;
};
