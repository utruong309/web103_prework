import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      const { data } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      setCreator(data);
    }
    fetchCreator();
  }, [id]);

  if (!creator) return <p>Loading...</p>;

  return (
    <div>
      <h1>{creator.name}</h1>
      <p>{creator.description}</p>
      <a href={creator.url}>Visit</a>
    </div>
  );
}

export default ViewCreator;