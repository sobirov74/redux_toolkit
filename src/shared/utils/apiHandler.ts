export const handleApi = (request: Promise<any>, callBack?: (status: boolean) => void) => {
  request
    .then((response: {responseStatus: number}) => {
      if (callBack) {
        callBack(response.responseStatus === 200);
      }
    })
    .catch(() => {
      if (callBack) {
        callBack(false);
      }
    });
};
