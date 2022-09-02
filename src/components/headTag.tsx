const ImageComponent = ({node,...props}:any) => {
  return (
      <div className='markdown-image-box'>
          <img {...props} alt={node.properties.alt}/>
          <p> {`▲ ${node.properties.alt}`}</p>
      </div>

  )
}

export default  ImageComponent