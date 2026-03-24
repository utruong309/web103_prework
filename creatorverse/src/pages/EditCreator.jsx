import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    imageURL: "",
    url: "",
    description: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setForm({
        name: "",
        imageURL: "",
        url: "",
        description: "",
        ...data
      });
      setLoading(false);
    }

    fetchCreator();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { name, imageURL, url, description } = form;
    const { error } = await supabase
      .from("creators")
      .update({ name, imageURL, url, description })
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    navigate(`/#browse`);
  }

  if (loading) {
    return (
      <div className="page-form">
        <p style={{ margin: 0 }}>Loading…</p>
      </div>
    );
  }

  return (
    <form className="page-form" onSubmit={handleSubmit}>
      <p style={{ margin: "0 0 1.25rem" }}>
        <Link
          to={`/creator/${id}`}
          style={{ color: "var(--accent)", fontWeight: 600 }}
        >
          ← Back to details
        </Link>
      </p>

      <label htmlFor="edit-name">Name</label>
      <input
        id="edit-name"
        name="name"
        value={form.name ?? ""}
        onChange={handleChange}
        required
      />

      <label htmlFor="edit-imageURL">Image</label>
      <p className="field-hint">
        Provide a link to an image of your creator. Include http:// or https://
      </p>
      <input
        id="edit-imageURL"
        name="imageURL"
        value={form.imageURL ?? ""}
        onChange={handleChange}
      />

      <label htmlFor="edit-description">Description</label>
      <p className="field-hint">
        Provide a short description. Who are they? What makes them interesting?
      </p>
      <textarea
        id="edit-description"
        name="description"
        value={form.description ?? ""}
        onChange={handleChange}
      />

      <h2 className="form-section-title">Social Media Links</h2>
      <p className="field-hint">
        Add at least one social media URL so people can find this creator.
      </p>

      <label htmlFor="edit-url">Primary Link</label>
      <p className="field-hint">
        Example: YouTube, Instagram, TikTok, Twitter/X, or personal website.
      </p>
      <input
        id="edit-url"
        name="url"
        value={form.url ?? ""}
        onChange={handleChange}
      />

      <button type="submit">Save changes</button>
    </form>
  );
}

export default EditCreator;
