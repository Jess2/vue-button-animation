export default (size, weight, width, height) => {
  let style = {
    'fontSize': changeUnit(size),
    'fontWeight': weight,
  };

  if (width) {
    style.minWidth = changeUnit(width);
  }

  if (height) {
    style.height = changeUnit(height);
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
