function ImageShow({ url, alt }) {
  return (
    <div className="m-3" style={{ width: "28rem" }}>
      <img src={url} className="card-img-top" alt={alt} />
    </div>
  );
}
export default ImageShow;
