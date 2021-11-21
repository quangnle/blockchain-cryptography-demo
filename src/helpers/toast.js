import { toast } from 'react-toastify';

export const TOP_LEFT = 'top-left';
export const TOP_RIGHT = 'top-right';
export const TOP_CENTER = 'top-center';
export const BOTTOM_LEFT = 'bottom-left';
export const BOTTOM_RIGHT = 'bottom-right';
export const BOTTOM_CENTER = 'bottom-center';

const TOAST_DEFAULT_OPTIONS = {
  position: TOP_RIGHT,
  autoClose: 5000,
  pauseOnHover: true,
  closeOnClick: true,
  hideProgressBar: false
};

const TOAST_SUCCESS = 'success';
const TOAST_ERROR = 'error';
const TOAST_WARN = 'warn';
const TOAST_INFO = 'info';
const TOAST_DEFAULT = 'default';

export const getToastFunction = (type, options) => message => {
  const optsMerge = Object.assign({}, TOAST_DEFAULT_OPTIONS, options);

  let toastFn = toast;

  if ([TOAST_SUCCESS, TOAST_ERROR, TOAST_WARN, TOAST_INFO].includes(type)) {
    toastFn = toast[type];
  }

  return toastFn(message, optsMerge);
};

export const toastSuccess = (message = 'Success', options) => {
  getToastFunction(TOAST_SUCCESS, options)(message);
};

export const toastError = (message = 'Error', options) => {
  getToastFunction(TOAST_ERROR, options)(message);
};

export const toastWarn = (message = 'Warning', options) => {
  getToastFunction(TOAST_WARN, options)(message);
};

export const toastInfo = (message = 'Info', options) => {
  getToastFunction(TOAST_INFO, options)(message);
};

export const toastDefault = (message = 'Default', options) => {
  getToastFunction(TOAST_DEFAULT, options)(message);
};
