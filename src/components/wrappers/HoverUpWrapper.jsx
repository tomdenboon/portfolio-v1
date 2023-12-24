function HoverUpWrapper(props) {
  return (
    <div className={`flex mt-2 group`}>
      <div
        className={`w-full h-full flex transform duration-300 ease-in-out group-hover:-translate-y-2`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default HoverUpWrapper;
