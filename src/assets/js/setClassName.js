export default (_this) => {
  const SIZES = ['ss', 's', 'm', 'l'];
  let classNames = [];

  if (_this.color) {
    classNames.push(`color-${_this.color}`);
  }

  if (SIZES.includes(_this.size)) {
    classNames.push(`size-${_this.size}`);
  }

  if (_this.loadingDot) {
    classNames.push(`loading`);
  }

  if (_this.disabled) {
    classNames.push(`disabled`);
  }

  if (_this.hueRotate) {
    classNames.push(`hue-rotate-${_this.hueRotate}`);
  }

  return classNames;
}
