export const setLSdata = (dataObj) => {
  const dataStr = JSON.stringify(dataObj);
  window.localStorage.setItem('gratreat', dataStr);
}
export const getLSdata = () => {
  const rawData = window.localStorage.getItem('gratreat')
  const dataObj = JSON.parse(rawData);
  return dataObj;
}

export const getGratiLogs = () => {
  return getLSdata().gratiLogs
}

export const getSingleRecord = (date) => {
  const logs = getGratiLogs();

  return logs[date];
}

export const addRecord = (record) => {
  const logs = getGratiLogs();

  logs[record[0]] = record[1];

  setLSdata(logs)
}

export const editRecord = (record) => {
  const logs = getGratiLogs();

  logs[record[0]] = record[1];

  setLSdata(logs);
}

export const deleteOneRecord = (date, i) => {
  const logs = getGratiLogs();
  if (logs[date]) {
    delete logs[date]
  }

  editRecord(logs)
}

export const checkRecordExists = (date) => {
  const logs = getGratiLogs();
  return !!logs[date];
}

// const record = [
//   '2022-01-02', {
//     mood: "happy",
//     logs: [
//       {
//         subject: "family",
//         text: "my brother got promoted at his work"
//       },
//       {
//         subject: "weather",
//         text: "Sunshine came out after 7 days of storm"
//       },
//       {
//         subject: "memory",
//         text: "I found elementary photobook from the upper bookshelf"
//       }
//     ]
//   },
// ]