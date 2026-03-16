export const FormData = window.FormData;
export const fetch = window.fetch;
export const Headers = window.Headers;
export const Request = window.Request;
export const Response = window.Response;
export const formDataToBlob = (formData) => {
  return new Blob([new URLSearchParams(formData).toString()]);
};
export default {};
