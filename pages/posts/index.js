import PostsTable from "../../componenets/templates/PostsTable";

const Posts = ({ posts }) => {
    return (
        <PostsTable posts={posts} />
    );
}


export const getServerSideProps = async (context) => {

    const { userId } = context.query;

    const params = new URLSearchParams();
    if (userId) 
        params.set("userId", userId);

    const response =  await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + "/posts?" + params.toString());
        
    const posts = await response.json();

    return ({
        props: {
            posts
        }
    });
}

export default Posts
