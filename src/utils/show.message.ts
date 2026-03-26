import { toast } from "sonner";

export const showErrorMessage = (message: string) => {
  toast.error(message);
};

export const showLoadingMessage = (message: string) => {
  return toast.loading(message);
};

export const showSuccessMessage = (message: string) => {
  toast.success(message);
};
