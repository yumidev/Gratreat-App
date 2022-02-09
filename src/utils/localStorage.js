export const setLSdata = (dataObj) => {
  const orgData = getLSdata();
  if (orgData) {
    orgData.gratiLogs = dataObj;
    const dataStr = JSON.stringify(orgData);
    window.localStorage.setItem('gratreat2022', dataStr);
  } else {
    const dataStr = JSON.stringify(dataObj);
    window.localStorage.setItem('gratreat2022', dataStr);
  }
}
export const getLSdata = () => {
  const rawData = window.localStorage.getItem('gratreat2022')
  const dataObj = JSON.parse(rawData);
  return dataObj;
}

export const getGratiLogs = () => {
  return getLSdata().gratiLogs
}

export const getSingleRecord = (date) => {
  const logs = getGratiLogs()
  return logs[date];
}

export const addRecord = (date, record) => {
  const logs = getGratiLogs();

  logs[date] = record;

  setLSdata(logs)
}

export const editRecord = (date, record) => {
  const logs = getGratiLogs();

  logs[date] = record;

  setLSdata(logs);
}

export const deleteOneRecord = (date, i) => {
  const logs = getGratiLogs();
  if (logs[date]) {
    logs[date].logs.splice(i, 1);
  }

  editRecord(date, logs[date])
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