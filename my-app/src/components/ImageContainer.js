import React from "react";
import Image from "./Image";
import Button from "./Button";

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfImages: 0,
      images: [],
      size: 300,
      key: 0
    };
  }

  addImage = () => {
    this.setState((state) => ({
      images: [...state.images, <Image key={state.key} width={this.state.size} />],
      numOfImages: state.numOfImages + 1,
      key: state.key + 1
    }));
    console.log(this.state.images);
  };

  removeImage = () => {
    const updatedImages = [...this.state.images];
    updatedImages.pop(); // Remove the last image
    this.setState((state) => ({
        images: updatedImages,
        numOfImages: Math.max(0, state.key - 1), // Ensure numOfImages doesn't go below 0
    }));
  };

  updateImage = (shift) => {
    this.setState((state) => ({
        size: state.size + shift,
    }));

    this.setState((state) => {
        const updatedImages = state.images.map((image, index) => (
          <Image key = {index} width={state.size} />
        ));
      
        return {
          images: updatedImages,
        };
      });
    };


  render() {
    return (
      <div>
        <Button action={this.addImage}>Add</Button>
        <Button action={this.removeImage}>Remove</Button>
        <Button action={() => this.updateImage(50)}>Increase</Button>
        <Button action={() => this.updateImage(-50)}>Decrease</Button>
        <br />
        {this.state.images}
      </div>
    );
  }
}

export default ImageContainer;
