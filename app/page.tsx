
const Home = async () => {

  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const data: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())

  return (
    <div>
      <h1>Server Comp</h1>
      <ul>
        {
          data?.map(item => (
            <li key={item?.id}>
              <h2>{item?.title}</h2>
              <span>{item?.title}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home