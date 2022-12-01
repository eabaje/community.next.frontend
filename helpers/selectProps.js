export function selectProps(...prop) {
  return function (obj) {
    const newObj = {};
    prop.forEach((name) => {
      newObj[name] = obj[name];
    });

    return newObj;
  };
}
