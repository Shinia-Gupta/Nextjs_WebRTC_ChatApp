import { toast, ToastOptions, TypeOptions } from "react-toastify";

const baseOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark", // 'light' | 'dark' | 'colored'
};

export const showToast = (type: TypeOptions, message: string,customOptions?:ToastOptions) => {
  switch (type) {
    case "success":
      toast.success(message, {...baseOptions,...customOptions});
      break;
    case "error":
      toast.error(message, {...baseOptions,...customOptions});
      break;
    case "info":
      toast.info(message, {...baseOptions,...customOptions});
      break;
    case "warning":
      toast.warning(message, {...baseOptions,...customOptions});
      break;
    default:
      toast(message, {...baseOptions,...customOptions});
      break;
  }
};
