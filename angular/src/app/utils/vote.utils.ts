export function calculateAverage(votes: (string | number)[]): string {
  const numericVotes = votes
    .filter(vote => typeof vote === 'number' || !isNaN(Number(vote)))
    .map(vote => Number(vote));
  
  if (numericVotes.length === 0) return 'N/A';
  
  const avg = numericVotes.reduce((a, b) => a + b, 0) / numericVotes.length;
  return avg.toFixed(1);
}