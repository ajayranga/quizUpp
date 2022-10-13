const serverUrl = 'http://127.0.0.1:5000';
export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}
function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}
function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
}
export async function request(
  url: string,
  options?: RequestInit
): Promise<{} | { err: ResponseError }> {
  const reqURL = serverUrl + url;
  console.log('Request routed to ', reqURL);
  const fetchResponse = await fetch(reqURL, options);
  const response = checkStatus(fetchResponse);
  return parseJSON(response);
}
