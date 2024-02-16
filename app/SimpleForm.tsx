import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SimpleForm = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: any) => {
    setTitle(e.target.value);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    if (title.trim() === "") {
      toast.error("Title cannot be empty");
      setLoading(false);
      return;
    }

    const data = await fetch("api/setPosts", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const res = await data.json();
    if(res.ok){
      toast.error(res.message);
      setLoading(false);
      return 0;
    }
    else {
      setLoading(false);
      setTitle("");
      toast.success("Post added successfully");
      router.refresh();
      
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-md">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Input:
        </label>
        <input
          type="text"
          value={title}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading} // Disable the button during loading
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
