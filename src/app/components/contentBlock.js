export default function ContentBlock(props) {
  return (
    <section className={props.className ?? "bg-gray-400 dark:bg-gray-800"}>
      <div className="max-w-screen-xl mx-auto px-4 py-8 space-y-12 lg:space-y-20 lg:py-24 lg:px-6">{props.children}</div>
    </section>
  );
}
