import { useParams } from "react-router-dom"

export function DetailSinglePage() {
  
  const params = useParams<'id'>();

  return (
    <h1>
      Team: {params.id}
    </h1>
  )
}
