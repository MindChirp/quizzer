import { defineStore } from "pinia";

export type TToastStatus = "success" | "warning" | "error";

interface IToast {
  title: string;
  description: string;
  status: TToastStatus;
  id: number;
}
type ToastPayload = { timeout?: number; title: string; description: string };

const defaultTimeout = 5000;

const createToast = (title: string, description: string, status: TToastStatus): IToast => ({
  title,
  description,
  status,
  id: Math.random() * 1000,
});

export default defineStore("toaster-store", {
  state: (): { toasts: IToast[] } => ({
    toasts: [],
  }),
  actions: {
    updateState(payload: ToastPayload, status: TToastStatus) {
      const { title, description, timeout } = payload;

      const toast = createToast(title, description, status);

      this.toasts.push(toast);

      setTimeout(() => {
        this.toasts = this.toasts.filter((t) => t.id !== toast.id);
      }, timeout ?? defaultTimeout);
    },
    success(payload: ToastPayload) {
      console.log(payload)
      this.updateState(payload, "success");
    },

    warning(payload: ToastPayload) {
      this.updateState(payload, "warning");
    },

    error(payload: ToastPayload) {
      this.updateState(payload, "error");
    },
  },
});