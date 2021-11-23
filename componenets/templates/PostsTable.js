import Table from "../../componenets/organisms/Table";
import PostRow from "../../componenets/molecules/PostRow";
import { useMemo } from "react";

const header = [ "Posted by", "Title", "Post" ];

const PostsTable = ({ posts }) => {

    const PostList = useMemo(() => (
        posts.map(post => (
            <PostRow 
                key={post.id}
                post={post}
                />
        ))
    ), [posts]);

    return (
        <Table 
            header={header}
            body={PostList}
            />
    )
}

export default PostsTable
