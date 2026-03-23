import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom"; //redirect to another page 

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
    await supabase.from("creators").insert([form]);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} />
       <input name="imageURL" onChange={handleChange} />
      <input name="url" onChange={handleChange} />
      <textarea name="description" onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddCreator;