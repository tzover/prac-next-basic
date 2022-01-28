export async function getAllTasksData() {
  const response = await fetch(new URL(`${process.env.NEXT_PUBLIC_URL}/tasks`))
  const tasks = await response.json()

  return tasks
}
