import { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from("creators").select("*");

      if (error) {
        console.error(error);
      } else {
        setCreators(data ?? []);
      }
    }

    fetchCreators();
  }, []);

  return (
    <section className="browse-section" aria-label="Creators list">
      <div className="browse-inner">
        {creators.length === 0 && (
          <p className="empty-state">No creators yet 😔</p>
        )}

        {creators.length > 0 && (
          <div className="grid">
            {creators.map((c) => (
              <CreatorCard key={c.id} creator={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ShowCreators;
