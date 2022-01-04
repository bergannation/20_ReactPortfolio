import React from "react";

import baylor from "../../images/baylor.jpg";
import jaelyn from "../../images/jaelyn.jpg";
import army from "../../images/army.jpg";
import acu from "../../images/acu.jpg";
import gretna from "../../images/gretna.jpg";
import gretna2 from "../../images/gretna2.jpg";
import gretna3 from "../../images/gretna3.jpg";
import gretna4 from "../../images/gretna4.jpg";
import jaelyn5 from "../../images/jaelyn5.jpg";
import mcneese from "../../images/mcneese.jpg";
import missState from "../../images/missState.jpg";
import missState2 from "../../images/missState2.jpg";
import samHouston from "../../images/samHouston.jpg";
import utep from "../../images/utep.jpg";
import gretnaWideouts from "../../images/wideouts.jpg";
import wideoutsDonte from "../../images/wideoutsDonte.jpg";
import wideoutsGent from "../../images/wideoutsGent.jpg";

const GalleryBackground = (props) => {
  return (
    <div class="photo-gallery__background">
      <img src={props.photos[props.currentPhoto].src} alt="image broken" />
    </div>
  );
};

const GalleryImage = (props) => {
  return (
    <div class="photo-gallery__image">
      <img src={props.photos[props.currentPhoto].src} alt="image broken" />
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
        src: jaelyn5,
        caption:
          "Coaching is a big part of my life! Jaelyn and I have seen some amazing venues from my time at ACU. Click through the slideshow to view some of the places that I have visited.",
      },
      {
        id: "2",
        title: "Nebraska Class A State Champions 2021",
        src: gretna,
        caption: "Gretna High School, Gretna NE",
      },
      {
        id: "3",
        title: "Baylor",
        src: baylor,
        caption: "ACU vs Baylor University Sept 1st, 2018",
      },
      {
        id: "4",
        title: "Virginia",
        src: wideoutsDonte,
        caption: "ACU vs Virginia, Nov 21st, 2020",
      },
      {
        id: "5",
        title: "State Champions!",
        src: gretnaWideouts,
        caption: "Wideouts 4 Life",
      },
      {
        id: "6",
        title: "Army",
        src: army,
        caption: "ACU vs Army, Oct 3rd, 2020",
      },
      {
        id: "7",
        title: "UTEP",
        src: utep,
        caption: "ACU vs UTEP, Sept 19th, 2020",
      },
      {
        id: "8",
        title: "Miss State",
        src: missState2,
        caption: "ACU vs Mississippi State, Nov 23rd, 2019",
      },
    ],
    currentPhotoIndex: 0,
    captionOpen: true,
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
