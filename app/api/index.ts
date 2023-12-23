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

export const fetchPost = async (id: number) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );

export const fetchComments = async (id: number) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );

export const fetchUsers = fetch("https://dummyjson.com/users").then((res) =>
  res.json()
);

export const fetchUser = fetch("https://dummyjson.com/users/1").then((res) =>
  res.json()
);

const movieOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjhjNGNkOGRhYzEzNGIxMmIwYzE3YWJiNTVlYjIwNyIsInN1YiI6IjYzNjk1NWZiMTY4NGY3MDA3YTliZjRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XiVTglc3cbq67hBraVAkJfw7sNlbeUh_aXcfaHMtdR4",
  },
};
export const fetchMovies = fetch(
  `https://api.themoviedb.org/3/movie/top_rated`,
  movieOptions
).then((res) => res.json());
