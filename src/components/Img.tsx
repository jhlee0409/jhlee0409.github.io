const ImageComponent = ({ node, ...props }: any) => {
  return (
    <div className="markdown-image-box">
      <img {...props} alt={props.alt} />
      <p> {`▲ ${props.alt}`}</p>
    </div>
  );
};

export default ImageComponent;
