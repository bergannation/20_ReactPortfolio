import React from "react";

import firstSlide from "../../images/baylor.jpg";
import baylor from "../../images/baylor.jpg";
const GalleryBackground = (props) => {
  return (
    <div class="photo-gallery__background">
      <img src={props.photos[props.currentPhoto].url} alt="" />
    </div>
  );
};

const GalleryImage = (props) => {
  return (
    <div class="photo-gallery__image">
      <img src={props.photos[props.currentPhoto].url} alt="" />
    </div>
  );
};

const GalleryCaption = (props) => {
  let classes = ["caption"];

  if (props.showCaption) {
    classes.push("caption--show");
    console.log(true);
  }

  return (
    <div class="photo-gallery__caption">
      <div class={classes.join(" ")}>
        <div class="caption__content">
          <h1 class="caption__header">
            {props.photos[props.currentPhoto].title}
          </h1>
          <p>{props.photos[props.currentPhoto].caption}</p>
        </div>
      </div>
    </div>
  );
};

const GalleryActions = (props) => {
  return (
    <div class="photo-gallery__actions">
      <button class="photo-gallery__actions--left" onClick={props.prevPhoto}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-alt-circle-left"
          class="svg-inline--fa fa-arrow-alt-circle-left fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"
          ></path>
        </svg>
      </button>
      <button class="photo-gallery__actions--right" onClick={props.nextPhoto}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-alt-circle-right"
          class="svg-inline--fa fa-arrow-alt-circle-right fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"
          ></path>
        </svg>
      </button>
      <button class="caption--toggle" onClick={props.toggleCaption}>
        {props.captionOpen ? "Less" : "More"} Info
      </button>
    </div>
  );
};

export default class Home extends React.Component {
  state = {
    photos: [
      {
        id: "1",
        title: "Coaching Experience",
        url: { firstSlide },
        caption:
          "Coaching is a big part of my life! My girlfriend Jaelyn and I have seen some amazing venues! Click the slideshow to view the places that I have coached at!",
      },
      {
        id: "2",
        title: "Baylor",
        url: { firstSlide },
        caption: "ACU vs Baylor University Sept 1st, 2018",
      },
      {
        id: "3",
        title: "Virginia",
        url: "https://ever24.s3.us-east-2.amazonaws.com/1628707278741-IMG_0937.jpg",
        caption: "ACU vs Virginia, Nov 21st, 2020",
      },
      {
        id: "4",
        title: "ACU WR's",
        url: "https://ever24.s3.us-east-2.amazonaws.com/1628707295019-IMG_8592.JPG",
        caption: "Wideouts 4 Life",
      },
      {
        id: "5",
        title: "Army",
        url: "https://ever24.s3.us-east-2.amazonaws.com/1628707315247-IMG_0683.JPG",
        caption: "ACU vs Army, Oct 3rd, 2020",
      },
      {
        id: "6",
        title: "UTEP",
        url: "https://ever24.s3.us-east-2.amazonaws.com/1628707320333-IMG_0597.JPG",
        caption: "ACU vs UTEP, Sept 19th, 2020",
      },
      {
        id: "7",
        title: "Miss State",
        url: "https://ever24.s3.us-east-2.amazonaws.com/1628707286114-IMG_9368.jpg",
        caption: "ACU vs Mississippi State, Nov 23rd, 2019",
      },
    ],
    currentPhotoIndex: 0,
    captionOpen: false,
  };

  toggleCaption = () => {
    let captionStatus = this.state.captionOpen;

    captionStatus = !captionStatus;

    this.setState({
      captionOpen: captionStatus,
    });
  };

  nextPhoto = () => {
    let current = this.state.currentPhotoIndex;
    let totalPhotos = this.state.photos.length;

    current++;

    if (current === totalPhotos) {
      current = 0;
    }

    console.log(current);

    this.setState({
      currentPhotoIndex: current,
    });
  };

  prevPhoto = () => {
    let current = this.state.currentPhotoIndex;
    let totalPhotos = this.state.photos.length;

    current--;

    if (current < 0) {
      current = totalPhotos - 1;
    }

    console.log(current);

    this.setState({
      currentPhotoIndex: current,
    });
  };

  render() {
    return (
      <div class="photo-gallery">
        <GalleryBackground
          photos={this.state.photos}
          currentPhoto={this.state.currentPhotoIndex}
        />
        <GalleryImage
          photos={this.state.photos}
          currentPhoto={this.state.currentPhotoIndex}
        />
        <GalleryCaption
          photos={this.state.photos}
          currentPhoto={this.state.currentPhotoIndex}
          showCaption={this.state.captionOpen}
        />
        <GalleryActions
          toggleCaption={this.toggleCaption}
          captionOpen={this.state.captionOpen}
          nextPhoto={this.nextPhoto}
          prevPhoto={this.prevPhoto}
        />
      </div>
    );
  }
}
