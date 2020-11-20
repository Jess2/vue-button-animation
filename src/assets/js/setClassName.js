export default (color, size, loadingDot, disabled = false) => {
  let predeterminedSizes = ['ss', 's', 'm', 'l'];
  let classNames = [
    `color-${color}`
  ];

  if (predeterminedSizes.includes(size)) {
    classNames.push(`size-${size}`);
  }

  if (loadingDot) {
    classNames.push(`loading`);
  }

  if (disabled) {
    classNames.push(`disabled`);
  }

  return classNames;
}
