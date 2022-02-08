export const setLSdata = (dataObj) => {
  const dataStr = JSON.stringify(dataObj);
  window.localStorage.setItem('gratreat', dataStr);
}
export const getLSdata = () => {
  const rawData = window.localStorage.getItem('gratreat')
  const dataObj = JSON.parse(rawData);
  return dataObj;
}

export const setRecord = (record) => {

}