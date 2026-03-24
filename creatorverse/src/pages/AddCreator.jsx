import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

function AddCreator() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    imageURL: "",
    url: "",
    description: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.from("creators").insert([form]);

    if (error) {
      console.error(error);
      return;
    }

    navigate("/creators");
  }

  return (
    <section className="browse-section" aria-label="Add creator">
      <form className="page-form" onSubmit={handleSubmit}>
        <label htmlFor="add-name">Name</label>
        <input
          id="add-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="add-imageURL">Image</label>
        <p className="field-hint">
          Provide a link to an image of your creator. Include http:// or https://
        </p>
        <input
          id="add-imageURL"
          name="imageURL"
          value={form.imageURL}
          onChange={handleChange}
        />

        <label htmlFor="add-description">Description</label>
        <p className="field-hint">
          Provide a short description. Who are they? What makes them interesting?
        </p>
        <textarea
          id="add-description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <h2 className="form-section-title">Social Media Links</h2>
        <p className="field-hint">
          Add at least one social media URL so people can find this creator.
        </p>

        <label htmlFor="add-url">Primary Link</label>
        <p className="field-hint">
          Example: YouTube, Instagram, TikTok, Twitter/X, or personal website.
        </p>
        <input
          id="add-url"
          name="url"
          value={form.url}
          onChange={handleChange}
        />

        <button type="submit">Add Creator</button>
      </form>
    </section>
  );
}

export default AddCreator;
