import React  from "react";

const Newsitem = (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex',justifyContent:'flex-end',position:'absolute',right:'0'}} >
          <span className="badge rounded-pill bg-danger" >
                {source}
              </span>
          </div>
       
          <img
            src={
              !imageUrl
                ? "https://media.cnn.com/api/v1/images/stellar/prod/150325082132-social-gfx-breaking-news.jpg?q=x_2,y_0,h_898,w_1596,c_crop/w_800"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...{" "}
              
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
