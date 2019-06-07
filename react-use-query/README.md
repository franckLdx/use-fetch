# useQuery
A react hook that encapsulates boilerpart that comes when doing query into functional components 

# Usage:
To execute a request when component is mounted:
~~~javascript
export const Posts = () => {
  const [{ state, response }] = useFetch('https://jsonplaceholder.typicode.com/posts');
  switch (state) {
    case 'loading':
      return 'Please wait while loading';
    case 'loaded':
      return (
        <Card.Group>
          {response.map(post => <Post key={post.id} {...post} />)}
        </Card.Group>);
    default:
      return 'Sorry, shits happen';
  }
}
~~~