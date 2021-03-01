import PropTypes from 'prop-types';

function buildPointsData(customerData, name) {
  let total = 0;
  const pointsData = [];

  for (const [key, value] of Object.entries(customerData)) {
    const points = value;
    total += points;
    pointsData.push(<div key={`${name}-${key}`}>{key}: {points} points</div>);
  }

  pointsData.push(<div key={`${name}-total`}>Total: {total} points</div>);
  pointsData.push(<br />);

  return pointsData;
}

export default function Data(props) {
  const { customerRecords } = props;
  
  return Object.keys(customerRecords)?.map((name) => {
    const pointsData = buildPointsData(customerRecords[name], name);

    return (
      <div key={name}>
        {name}
        <div>{pointsData}</div>
      </div>
    );
  });
}

Data.propTypes = {
  customerRecords: PropTypes.object
};