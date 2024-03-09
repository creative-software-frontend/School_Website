import React from "react";

const ToastComponents = ({ successMessage, setSuccessMessage }) => {
  return (
    <div class="position-fixed top-0 end-0 p-3" style={{ zIndex: "11" }}>
      <div
        id="liveToast"
        class={`toast ${
          successMessage ? "show" : "hide"
        } slide-in opacity-fade`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{ border: "1px solid green" }}
      >
        <div
          class="toast-header"
          style={{
            borderBottom: "1px solid gray",
            background: "#52C174",
            color: "white",
          }}
        >
          <strong class="me-auto">Success</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={() => setSuccessMessage(false)}
          ></button>
        </div>
        <div class="toast-body">{successMessage}</div>
      </div>
    </div>
  );
};

export default ToastComponents;
