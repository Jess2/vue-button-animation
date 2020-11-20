export default (_this) => {
  let style = {
    'fontSize': changeUnit(_this.size),
    'fontWeight': _this.weight,
  };

  if (_this.width) {
    style.minWidth = changeUnit(_this.width);
  }

  if (_this.height) {
    style.height = changeUnit(_this.height);
  }

  return style;
}

function changeUnit (value) {
  if (typeof value === 'number' || !isNaN(Number(value))) {
    return `${value}px`;
  } else if (typeof value === 'string') {
    return value;
  }
}
