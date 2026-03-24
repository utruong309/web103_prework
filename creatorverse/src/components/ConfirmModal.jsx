import { useEffect } from "react";

function ConfirmModal({
  open,
  title,
  message,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  confirming = false,
  onConfirm,
  onCancel,
  danger = true
}) {
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e) {
      if (e.key === "Escape") onCancel?.();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      className="confirm-modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onCancel?.();
      }}
    >
      <div
        className="confirm-modal-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
        aria-describedby="confirm-modal-desc"
      >
        <h2 id="confirm-modal-title" className="confirm-modal-title">
          {title}
        </h2>
        <p id="confirm-modal-desc" className="confirm-modal-message">
          {message}
        </p>
        <div className="confirm-modal-actions">
          <button
            type="button"
            className="confirm-modal-btn confirm-modal-btn--ghost"
            onClick={onCancel}
            disabled={confirming}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            className={
              danger
                ? "confirm-modal-btn confirm-modal-btn--danger"
                : "confirm-modal-btn confirm-modal-btn--primary"
            }
            onClick={onConfirm}
            disabled={confirming}
          >
            {confirming ? "Deleting…" : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
