export const RenderValues = (props) => {
  if (!props.values) {
    return <div></div>;
  }
  return (
    <p>
      {props.title}: {props.values}
    </p>
  );
};

export const RenderListValues = (props) => {
  if (!props.values) {
    return;
  }

  const renderedValues = props.values.map((value) => {
    if (!value.level) {
      if (value.name) {
        return (
          <div key={value.name}>
            <p>
              {value.name}: {value.amount}
              {value.scaling}
            </p>
          </div>
        );
      } else {
        return (
          <div key={value}>
            <p>{value}</p>
          </div>
        );
      }
    } else {
      return <div>entro</div>;
    }
  });

  return (
    <div className="four wide column">
      <div style={{ fontWeight: "bold" }}>{props.title} </div>
      <div>{renderedValues}</div>
      <br />
    </div>
  );
};

export const RenderObjectValues = (props) => {
  if (!props.values) {
    return;
  }

  const renderedValues = Object.entries(props.values).map((value) => {
    if (!value.level) {
      if (value.name) {
        return (
          <div key={value.name}>
            <p>
              {value.name}: {value.amount}
              {value.scaling}
            </p>
          </div>
        );
      } else {
        return (
          <div key={value}>
            <p>{value}</p>
          </div>
        );
      }
    } else {
      return <div></div>;
    }
  });

  return (
    <div className="four wide column">
      <div style={{ fontWeight: "bold" }}>{props.title} </div>
      <div>{renderedValues}</div>
      <br />
    </div>
  );
};
