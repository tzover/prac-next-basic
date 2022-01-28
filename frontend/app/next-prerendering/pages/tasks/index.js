import { useEffect } from 'react'
import useSWR from 'swr'
import { getAllTasksData } from '../../lib/tasks'

const fetcher = (url) => fetch(url).then((res) => res.json())
const apiUrl = `${process.env.NEXT_PUBLIC_URL}/tasks`

function TaskList(props) {
  const { taskList } = props

  const { data: tasks, mutate } = useSWR(apiUrl, fetcher, {
    initialData: taskList,
    refreshInterval: 1000,
  })

  useEffect(() => {
    mutate()
  }, [])

  return (
    <>
      <h1>List of Tasks</h1>
      {tasks &&
        tasks.map((task) => {
          return (
            <dev key={task.id}>
              <h2>{task.item}</h2>
            </dev>
          )
        })}
    </>
  )
}

export default TaskList

export async function getStaticProps() {
  const staticTasks = await getAllTasksData()

  return {
    props: {
      taskList: staticTasks,
    },
    revalidate: 3,
  }
}
