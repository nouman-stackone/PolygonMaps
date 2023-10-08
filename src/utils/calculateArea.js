import {getAreaOfPolygon, convertArea} from 'geolib';

export const calculatePolygonArea = polygonCoordinates => {
  if (polygonCoordinates.length < 3) {
    return 0;
  }

  let polygonPoints = [];
  polygonCoordinates.forEach(item =>
    polygonPoints.push([item.latitude, item.longitude]),
  );

  const area = getAreaOfPolygon(polygonPoints);

  const areaInSqft = convertArea(area, 'sqft');

  return `${areaInSqft.toFixed(0)} SF`;
};
