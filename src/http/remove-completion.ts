export async function removeCompletion(goalId: string) {
  await fetch('http://localhost:3333/remove-completions', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
