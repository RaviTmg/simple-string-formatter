const formatList = (list) => {
  return list.reduce((string, listItem, i) => {
    let separator = ", ";
    if (i === 0) separator = "";
    if (i === list.length - 1 && i !== 0) separator = " & ";
    return `${string}${separator}${listItem.name}`;
  }, "");
};
module.exports = formatList;
