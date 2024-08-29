import PostForm from "./PostForm"
import UserForm from "./UserForm";

const onSubmit = (vals: any, setSubmitting: any) => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: vals.title,
      body: vals.body,
      userId: 1,
    }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
  })
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    setSubmitting(false);
  });
}

function App() {

  return (
    <div className="container">
      <div>Hello App</div>
      
      <PostForm onSubmit={onSubmit}></PostForm>
      <UserForm></UserForm>
    </div>
  )
}

export default App;
