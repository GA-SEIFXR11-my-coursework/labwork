const Dog = (props) => {
  const weight = props.avgWeight;
  const avgWeight = Math.round((weight[0] + weight[1]) / 2);
  const height = props.avgHeight;
  const avgHeight = Math.round((height[0] + height[1]) / 2);

  return (
    <div className="breed">
      <div className="breed-info">
        <h2>{props.name}</h2>
        <dl className="breed-stats">
          <dt>Avg. weight</dt>
          <dd>{avgWeight} kg</dd>
          <dt>Avg. height</dt>
          <dd>{avgHeight} cm</dd>
          <dt>Intelligence rank</dt>
          <dd>{props.intelligence}</dd>
        </dl>
      </div>
      <img src={props.imgUrl} />
    </div>
  );
};

export default Dog;
