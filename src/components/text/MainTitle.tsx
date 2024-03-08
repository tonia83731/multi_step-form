type Title_props = {
  title: string;
  description: string;
};

export default function MainTitle(props: Title_props) {
  const { title, description } = props;
  return (
    <div className="">
      <h1 className="text-denim font-bold text-2xl md:text-[32px]">{title}</h1>
      <p className="text-grey mt-3">{description}</p>
    </div>
  );
}
