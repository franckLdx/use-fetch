# useFetch
A react hook that encapsulates boilerpart that comes when doing query into functional components.

# Usage:
To execute a get with no parameter when component is mounted:
~~~javascript
export const Posts = () => {
  const [fetchState, result] = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [selectedPost, setSelectedPost] = useState(undefined);
  const onPostSelected = useCallback(
    (item, { value }) => setSelectedPost(value),
    []
  );
  switch (fetchState) {
    case 'loading':
      return 'Please wait while loading';
    case 'loaded':
      const options = result.map(post => ({
        key: post.id,
        value: post.id,
        text: post.title
      }))
      return (<>
        <Dropdown
          placeholder='Select a post'
          fluid
          search
          selection
          options={options}
          value={selectedPost}
          onChange={onPostSelected}
        />
        {selectedPost && (<><br></br> <Post id={selectedPost} /></>)}
      </>)
    default:
      return 'Sorry, shits happen';
  }
}
~~~

To execute a Get with parameter(s) when component is mounted or when a parameter change:
set the paramater(s) in denpendecies list. The requests will be executed whenever
the dependencies change (and only when the dependencies change).
~~~javascript
export const Post = ({ id }) => {
  const [fetchState, result] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    [id]
  );
  switch (fetchState) {
    case 'loading':
      return 'Please wait while loading';
    case 'loaded':
      return (
        <article>
          <Header as='h4'> {result.title}</Header>
          <br></br>
          {result.body}
        </article >
      );
    default:
      return 'Sorry, shits happen';
  }
}
~~~

# API:
const [fetchState, result] = useFetch(URI, [depedencies]);

Result content varies depending on fetchState value. This last can have the followong values:
 * __loading__: waiting for response, result is undefined
 * __loaded__: got a successfull response; result contains the response
 * __error__: request failed, result contains information about the error. Error could be a response (a 4xx or a 5xx) or an error object.
 