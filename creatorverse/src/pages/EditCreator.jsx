import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    url: "",
    description: ""
  });

  //fetch
  useEffect(() => {
    async function fetchCreator() {
      const { data } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      setForm(data);
    }
    fetchCreator();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await supabase
      .from("creators")
      .update(form) //update != insert 
      .eq("id", id);

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="url" value={form.url} onChange={handleChange} />
      <textarea name="description" value={form.description} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditCreator;