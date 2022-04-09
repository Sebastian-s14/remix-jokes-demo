import { Link } from "remix"

export const about = () => {
    return (
        <div>
            About Page
            <hr />
            <Link to="/" prefetch="intent">
                Home
            </Link>
        </div>
    )
}

export default about