export const joinRoomDialogStyles = [`
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dialog {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }

  h2 {
    margin-bottom: 1.5rem;
    color: #1e40af;
    text-align: center;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #4b5563;
  }

  .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
  }

  .input:focus {
    outline: none;
    border-color: #2563eb;
    ring: 2px solid #2563eb;
  }

  .btn {
    width: 100%;
    padding: 0.75rem;
    background: #2563eb;
    color: white;
    border-radius: 0.375rem;
    font-weight: 500;
  }

  .btn:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }

  .btn:not(:disabled):hover {
    background: #1d4ed8;
  }

  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
`];