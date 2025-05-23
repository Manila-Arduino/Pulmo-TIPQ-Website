import { toast, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions = { duration: 2000, type: "error" as TypeOptions };

const notify = (
  text: string | React.FC,
  options?: Partial<typeof defaultOptions>
) => {
  options = { ...defaultOptions, ...options };

  toast(text, {
    position: "top-center",
    autoClose: options.duration,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type: options.type,

  });
};

export default notify;
