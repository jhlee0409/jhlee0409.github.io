const ImageComponent = ({node,...props}:any) => {
    console.log(node)

  return (
      <div className='markdown-image-box'>
          <img {...props}/>
          <p> {`▲ ${node.properties.alt}`}</p>
      </div>

  )
}

export default  ImageComponent