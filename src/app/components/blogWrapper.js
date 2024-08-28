export default function BlogWrapper(props) {
  return (
    <section className={"bg-white"}>
      <div className="max-w-screen-xl mx-auto  px-4 py-8 space-y-12 lg:space-y-20 lg:py-24 lg:px-6 bg-white dark:bg-gray-900">{props.children}</div>
    </section>
  );
}
