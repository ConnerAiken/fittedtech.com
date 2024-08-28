import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import BlogWrapper from "../../../../components/blogWrapper";

export default function ReactIntroToCustomHooks() {
  return (
    <>
      <BlogWrapper>
        <div class="container mx-auto px-4 ">
          <div className="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">An intro to custom hooks</h2>
            <p className="mb-8 font-light lg:text-xl">Did you know you can use custom hooks with React?</p>
            <p>Here's an example</p>
            <SyntaxHighlighter language="javascript" style={dark}>
              {`import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />); 
`}
            </SyntaxHighlighter>
          </div>
          <div className="w-full"></div>
        </div>
      </BlogWrapper>
      {/* End block */}
    </>
  );
}
