const makeResponsesOk = (res, err) => {
  const msg = {
    OK: true,
    Message: 'Success',
  }
  res.status(200).json(msg)
}

const makeResponsesOkData = (res, data, error) => {
  const msg = {
    OK: true,
    Message: 'Success',
    Data: data
  }
  res.status(200).json(msg)
}

module.exports = {
  makeResponsesOk,
  makeResponsesOkData
}