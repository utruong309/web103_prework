import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import ConfirmModal from "../components/ConfirmModal";

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

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

  async function confirmDelete() {
    setDeleting(true);
    const { error } = await supabase.from("creators").delete().eq("id", id);
    setDeleting(false);

    if (error) {
      console.error(error);
      return;
    }

    setDeleteOpen(false);
    navigate("/creators");
  }

  return (
    <div className="page-form">
      <h1 style={{ margin: "0 0 1rem", fontSize: "2rem" }}>{creator.name}</h1>

      {creator.imageURL ? (
        <img
          src={creator.imageURL}
          alt={creator.name}
          style={{
            width: "100%",
            maxHeight: 260,
            objectFit: "cover",
            borderRadius: 12,
            marginBottom: "1.25rem"
          }}
        />
      ) : null}

      <p style={{ margin: "0 0 1rem", lineHeight: 1.55 }}>{creator.description}</p>

      {creator.url ? (
        <p style={{ margin: "0 0 1.25rem" }}>
          <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", fontWeight: 700 }}
          >
            Visit link
          </a>
        </p>
      ) : null}

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <Link
          to={`/edit/${creator.id}`}
          style={{
            background: "var(--accent)",
            color: "var(--text-hero)",
            textDecoration: "none",
            padding: "0.75rem 1.25rem",
            borderRadius: 6,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            display: "inline-block"
          }}
        >
          Edit Creator
        </Link>
      </div>

      <div>
        <button
          type="button"
          onClick={() => setDeleteOpen(true)}
          style={{
            background: "#ef4444",
            color: "var(--text-hero)",
            border: "none",
            padding: "0.75rem 1.25rem",
            borderRadius: 6,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            cursor: "pointer"
          }}
        >
          Delete Creator
        </button>
      </div>

      <ConfirmModal
        open={deleteOpen}
        title="Remove this creator?"
        message={`“${creator.name}” will be deleted permanently from Creatorverse. This can’t be undone.`}
        confirmLabel="Delete permanently"
        cancelLabel="Keep creator"
        confirming={deleting}
        onCancel={() => !deleting && setDeleteOpen(false)}
        onConfirm={confirmDelete}
        danger
      />
    </div>
  );
}

export default ViewCreator;