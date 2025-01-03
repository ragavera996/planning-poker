export const cardDeckStyles = [`
  .card-deck {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
  }
  .card {
    width: 80px;
    height: 120px;
    border: 2px solid #2563eb;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    background: white;
    cursor: pointer;
    transition: all 0.2s;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }
  .card.selected {
    background: #2563eb;
    color: white;
  }
`];