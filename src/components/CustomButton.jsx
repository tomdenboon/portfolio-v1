function Button(props) {
  return (
    <button
      className="relative text-text-base hover:text-secondary
      border rounded select-none bg-opacity-0 
      border-text-base hover:border-secondary transform duration-200"
    >
      <div
        className="absolute bg-secondary w-full h-full 
      rounded opacity-0 hover:opacity-10 duration-200 transform"
      ></div>
      <div className="my-1 mx-2">{props.title}</div>
    </button>
  );
}

export default Button;
