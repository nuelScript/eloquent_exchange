import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader className="h-20 w-20 text-[#4168B7] dark:text-[#A77700] animate-spin" />
    </div>
  );
};

export default Loading;
