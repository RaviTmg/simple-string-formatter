const formatList = (list) => {
  const filtered = list.filter((item) => item && item.name && item.name !== "");
  return filtered.reduce((string, listItem = {}, i) => {
    const { name } = listItem;
    let separator = ", ";
    if (i === 0) separator = "";
    else if (i === filtered.length - 1) separator = " & ";
    return `${string}${separator}${name}`;
  }, "");
};
module.exports = formatList;
