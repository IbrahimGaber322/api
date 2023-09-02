export async function createPost({
  author,
  title,
  content,
}: {
  author: string;
  title: string;
  content: string;
}) {
  try {
    let createdPost;
    await fetch(
      "https://jsonplaceholder.typicode.com/IbrahimGaber322/json_server/posts",
      {
        method: "POST",
        body: JSON.stringify({
          author,
          title,
          content,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => (createdPost = json));

    if (createdPost) {
      return JSON.parse(JSON.stringify(createdPost));
    } else {
      return null;
    }
  } catch (error: any) {
    throw new Error(`Failed to create post: ${error.message}`);
  }
}

export const fetchPosts = fetch(
  "https://jsonplaceholder.typicode.com/posts"
).then((res) => res.json());

export const fetchPost = async (id: number) => {
  let post;
  let comments;
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((json) => (post = json));

  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((res) => res.json())
    .then((json) => (comments = json));
  return { post, comments };
};

export const fetchComments = async (id: number) => {
  let comments;
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((json) => (comments = json));

  return comments;
};
