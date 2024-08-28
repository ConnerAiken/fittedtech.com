import Image from "next/image";
import ContentBlock from "./../components/contentBlock";
import fs from "fs";
import Link from "next/link";

const blogPosts = fs.readdirSync("src/app/blog", { recursive: true }).filter((file) => file !== "page.js");
const buildHierarchy = (paths) => {
  const root = {};

  paths.forEach((path) => {
    const parts = path.split("\\");
    let current = root;

    parts.forEach((part) => {
      if (!current[part] && part !== "page.js") {
        current[part] = {};
      } else if (part === "page.js") {
        current[part] = true;
      } else {
        current = current[part];
      }
    });
  });

  return root;
};

const formatText = (text) => {
  return text.replace(/-/g, " ");
};
export default function Blog() {
  const blogHierarchy = buildHierarchy(blogPosts);
  return (
    <>
      <ContentBlock className="bg-grey-200">
        <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:py-16  lg:pt-14">
          <div className="mr-auto place-self-center lg:col-span-12">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl dark:text-white">
              Software and Technology Blog
            </h1>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              We love talking about technology and things we are passionate about. Software engineering, web development, or IT services, we blog
              about it all. Here are some of our latest blog posts.
            </p>
          </div>

          {Object.keys(blogHierarchy).map((category) => {
            return (
              <div
                className="rounded-lg bg-slate-50 py-5 px-6 text-slate-800 shadow-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800"
                key={category}
              >
                <h4 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-2xl xl:text-3xl dark:text-white capitalize">
                  {formatText(category)}
                </h4>
                {Object.keys(blogHierarchy[category]).map((technology) => {
                  return (
                    <div
                      className="rounded-lg bg-slate-300 m-3 py-5 px-6 text-slate-800 shadow-slate-200 hover:shadow-lg hover:shadow-slate-200"
                      key={technology}
                    >
                      <h5 className="mb-4 text-xl font-extrabold leading-none tracking-tight md:text-xl xl:text-2xl dark:text-white capitalize">
                        {formatText(technology)}
                      </h5>
                      <div className=" grid  grid-cols-4 gap-4">
                        {Object.keys(blogHierarchy[category][technology]).map((post) => {
                          return (
                            <Link key={post} href={`/blog/${category}/${technology}/${post}`} style={{ textTransform: "capitalize" }}>
                              <div class="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
                                <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-8 w-8">
                                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a8 8 0 0 1 11.314 0"></path>
                                    <path d="M3.515 9.515c4.686-4.687 12.284-4.687 17 0"></path>
                                  </g>
                                </svg>
                                <div class="mt-3 text-sm font-semibold">{post.replaceAll("-", " ")}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </ContentBlock>
    </>
  );
}
