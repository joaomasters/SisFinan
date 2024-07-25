import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
      <div className="flex flex-col gap-2">
      <h1>Error Page</h1>
      <Link to="/">Home page link</Link>
      </div>
    )
  }