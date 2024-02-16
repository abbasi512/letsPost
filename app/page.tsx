"use client"
import { useEffect, useState } from "react";
import SimpleForm from "./SimpleForm";
import { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    }
  })
  async function getPosts() {
    const res = await fetch("http://localhost:3001/api/getPosts");
    if (!res.ok) {
      console.log(res);
    }
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const data = await getPosts();
      setData(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
    <Toaster/>
      <SimpleForm />
      <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-md">
        {loading ? (
          <h1>loading ......</h1>
        ) : (
          data.map((d: any, index: any) => (
            <div key={index}>
              <h1>{d.title}</h1>
            </div>
          ))
        )}
      </div>
    </>
  );
}
