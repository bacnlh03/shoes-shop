export const getDate = (date) => {
  const formatedDate = ("0" + date.getUTCDate()).slice(-2) + "/" +
    ("0" + (date.getUTCMonth() + 1)).slice(-2) + "/" +
    date.getUTCFullYear() + " " +
    ("0" + date.getUTCHours()).slice(-2) + ":" +
    ("0" + date.getUTCMinutes()).slice(-2);

  return formatedDate;
};