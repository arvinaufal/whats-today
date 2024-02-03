export const getUserDetail = async (user_id) => {
    try {
        const res = await fetch(
            `https://gorest.co.in/public/v2/users/${user_id}`
        );

        return res.json();
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
};

export const getComments = async (post_id) => {
    try {
        const res = await fetch(
            `https://gorest.co.in/public/v2/posts/${post_id}/comments`
        );

        return res.json();
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
};

export const getPosts = async () => {
    try {
        let res = await fetch(
            "https://gorest.co.in/public/v2/posts?page=1&per_page=20"
        );
        
        res = await res.json();
        let posts = await Promise.all(res.map(async (post) => {
            const user = await getUserDetail(post.user_id);
            let name = user.name ? user.name : "Anonymous";
            let email = user.email ? user.email : "anonymous";
            
            post.user = {
                name,
                email
            }
            post.comments = await getComments(post.id);
            post.likes = Math.floor(Math.random() * 1000);
            post.shares = Math.floor(Math.random() * 20);

            return post;
        }));

        return posts;
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
};

export const getDetailPost = async (post_id) => {
    try {
        let res = await fetch(
            `https://gorest.co.in/public/v2/posts/${post_id}`
        );
        
        res = await res.json();
        const user = await getUserDetail(res.user_id);
        let name = user.name ? user.name : "Anonymous";
        let email = user.email ? user.email : "anonymous";
        res.user = {
            name,
            email
        }
        res.comments = await getComments(res.id);
        res.likes = Math.floor(Math.random() * 1000);
        res.shares = Math.floor(Math.random() * 20);
        
        return res;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
};