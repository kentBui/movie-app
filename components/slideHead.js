import React from "react";

function SlideHead({ images }) {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide my-4"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {images.map((item, index) => (
            <li
              key={item.id}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner" role="listbox">
          {images.map((item, index) => (
            <div
              key={index}
              className={index === 0 ? "carousel-item active" : "carousel-item"}
            >
              <img
                className="d-block img-fluid img-object-fit"
                src={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <style jsx>{`
        .img-object-fit {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
        }
      `}</style>
    </>
  );
}

export default SlideHead;
