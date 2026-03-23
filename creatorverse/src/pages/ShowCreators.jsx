import { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase
        .from("creators")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        setCreators(data);
      }
    }

    fetchCreators();
  }, []);

  return (
    <div>
      <h1>Creatorverse</h1>

      <Link to="/add">Add Creator</Link>

      {creators.length === 0 && <p>No creators yet</p>}

      {creators.length > 0 &&
        creators.map((c) => (
          <CreatorCard key={c.id} creator={c} />
        ))
      }
    </div>
  );
}

export default ShowCreators;