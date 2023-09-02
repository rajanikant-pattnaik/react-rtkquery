import { FormEvent, useState } from "react";
import PostsCard from "./components/PostsCard";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

function App() {
  const { isLoading, data } = useGetPostsQuery("");
  const [name, setName] = useState<string>("")
  const [newPost]=useNewPostMutation()
  const handleSubmit=(e:FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    const post:Post={
      name,
      id:Math.random()*100000,
      userId:7796868
    }
    newPost(post)
    setName("");
  }
  return (
    <div>
      <h1>My APP</h1>


      <form onSubmit={handleSubmit}>
       <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
       <button type="submit">Submit</button>
      </form>

      {isLoading ? (
        <div>Loading....</div>
      ) : (
        data?.map((i) => <PostsCard key={i.id} post={i} />)
      )}
    </div>
  );
}

export default App;
