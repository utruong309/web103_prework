import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

function Home() {
  const [creators, setCreators] = useState([]);
  const [form, setForm] = useState({
    name: "",
    imageURL: "",
    url: "",
    description: ""
  });

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from("creators").select("*");

      if (error) {
        console.error(error);
      } else {
        setCreators(data);
      }
    }

    fetchCreators();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("creators")
      .insert([form])
      .select();

    if (error) {
      console.error(error);
      return;
    }

    setCreators([...(data ?? []), ...creators]);
    setForm({
      name: "",
      imageURL: "",
      url: "",
      description: ""
    });
  }

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Creatorverse</h1>

        <div className="buttons">
          <Link to="/#browse" role="button">
            View all creators
          </Link>
          <Link to="/#add-creator" role="button">
            Add a creator
          </Link>
        </div>
      </div>

      <section id="browse" className="browse-section" aria-label="Creators list">
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

      <section id="add-creator" className="browse-section" aria-label="Add creator">
        <form className="page-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="imageURL">Image</label>
          <p className="field-hint">
            Provide a link to an image of your creator. Include http:// or https://
          </p>
          <input
            id="imageURL"
            name="imageURL"
            value={form.imageURL}
            onChange={handleChange}
          />

          <label htmlFor="description">Description</label>
          <p className="field-hint">
            Provide a short description. Who are they? What makes them interesting?
          </p>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <h2 className="form-section-title">Social Media Links</h2>
          <p className="field-hint">
            Add at least one social media URL so people can find this creator.
          </p>

          <label htmlFor="url">Primary Link</label>
          <p className="field-hint">
            Example: YouTube, Instagram, TikTok, Twitter/X, or personal website.
          </p>
          <input
            id="url"
            name="url"
            value={form.url}
            onChange={handleChange}
          />

          <button type="submit">Add Creator</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
