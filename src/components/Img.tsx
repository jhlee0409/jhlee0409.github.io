const ImageComponent = ({ node, ...props }: any) => {
  const alt =
    props.alt.search("@") === -1 ? props.alt : props.alt.split("@")[0];
  const size = props.alt.search("@") === -1 ? "" : props.alt.split("@")[1];
  return (
    <div className="markdown-image-box" style={{ width: size }}>
      <img {...props} alt={props.alt} />
      <p> {`▲ ${alt}`}</p>
    </div>
  );
};

export default ImageComponent;
