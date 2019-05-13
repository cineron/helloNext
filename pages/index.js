import Link from "next/link";
import Layout from "../components/MyLayout";

const PostLink = (props) => (
    <li>
        <Link 
            as={`/p/${props.id}`}
            href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Blog = () => {
    return (
        <Layout>
            <h1>My Blog</h1>
                <ul>
                    <PostLink id="hello-nextjs" title="Hello Next.js"/>
                    <PostLink id="learn-nextjs" title="Learn Next.js!"/>
                    <PostLink id="deploy-nextjs" title="Deploy apps with Zeit!"/>
                </ul>
        </Layout>
    )
}
        // <Layout>
        // <Link href="/about">
        //     <button>About Page</button>
        // </Link>
        // <p>Hello Next.js</p>
        // <p>A server <a href="/about"> link</a> to the About Page</p>
        // </Layout>
export default Blog