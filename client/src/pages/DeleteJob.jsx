import { toast } from "react-toastify";
import customFetch from "../utils/CustomFetch";
import { redirect } from "react-router-dom";

export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`/jobs/${params.id}`);
      queryClient.invalidateQueries(["jobs"]);
      toast.success("Job deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
    return redirect("/dashboard/all-jobs");
  };

const DeleteJob = () => {
  return <div>DeleteJob</div>;
};
export default DeleteJob;
