import PostList from "../PostsList";
import { Outlet } from "react-router-dom";

function Posts() {

  return (
  <>
    <Outlet />
    <main>
      <PostList />
    </main>
  </>
  );
  // 고려해야 하는 상황
  // 여러번 사용하면 감싸야 한다 .
}

export default Posts;

// loader는 페이지가 렌더링 되기전에 데이터를 미리 가져온다.
export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();

  return resData.posts;
}
