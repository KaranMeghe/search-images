import ImageShow from "./ImageShow";
function ImageList({ images }) {
  const renderedImages = images.map((image) => (
    <ImageShow
      key={image.id}
      url={image.urls.small}
      alt={image.alt_description}
    />
  ));
  return <div className="d-flex flex-row flex-wrap">{renderedImages}</div>;
}
export default ImageList;
