import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseScore, resetScore } from "../../actions/drummerActions";
import "./index.css";
import Button from "../Button/button";

const Home = () => {
  const drummers = useSelector((state) => state.drummer.drummers);
  const dispatch = useDispatch();

  const [displayImages, setDisplayImages] = useState([])
  const [currentImages, setCurrentImages] = useState([])
  const [winningImage, setWinningImage] = useState({})

  useEffect(() => {
    if (drummers) {
      generateDisplayImages(drummers.length);
    }
  }, []);

  const generateDisplayImages = size => {
    var images = []
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        var item = [drummers[i], drummers[j]];
        images.push(item);
      }
    }
    setDisplayImages(images);
    getNewImage(images);
  };

  const getNewImage = (images = displayImages) => {
    if (images.length > 0) {
      const imageIndex = Math.floor(Math.random() * images.length)
      setCurrentImages(images[imageIndex])
      images.splice(imageIndex, 1)
    }
  }

  const generateDrawImages = updatedDrummers => {
    let newImages = updatedDrummers.filter(item => {
      return item.score >= 2
    })
    var newDisplayImages = []
    for (let i = 0; i < newImages.length; i++) {
      for (let j = i + 1; j < newImages.length; j++) {
        var item = [newImages[i], newImages[j]];
        newDisplayImages.push(item);
      }
    }
    setDisplayImages(newDisplayImages)
    getNewImage(newDisplayImages)
  }

  const handleSelectImage = id => {
    let updatedDrummers = drummers.map(item => {
      if (item.id === id) {
        if (item.score >= 2) {
          setWinningImage(item)
        }
        return { ...item, score: item.score + 1 };
      } else {
        return item;
      }
    })
    dispatch(
      increaseScore(updatedDrummers, () => {
        if (displayImages.length === 0) {
          generateDrawImages(updatedDrummers)
        } else {
          getNewImage()
        }
      })
    )
  }

  const handleReset = () => {
    setWinningImage({})
    dispatch(
      resetScore(() => {
        generateDisplayImages(drummers.length);
      })
    );
  };

  return (
    <div className="container">
      <div className="container-images">
        {winningImage.image === undefined ? (
          <>
            <div className="heading">
              Which of the photos do you like more?
            </div>
            <div className="images">
              {currentImages.length !== 0 &&
                currentImages.map((item) => {
                  return (
                    <div className="images-container">
                      <div className="images-container-back">
                        <img
                          className="images-container-image"
                          height="200"
                          width="200"
                          key={item.id}
                          src={item.image}
                        />
                      </div>
                      <div
                        className="images-button"
                        onClick={() => handleSelectImage(item.id)}
                      >
                        <Button name={item.name} />
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        ) : (
          <div className="winner">
            <div className="heading">The Winning Photo Is....</div>
            <div className="winner-container-back">
              <img
                className="images-container-image"
                height="200"
                width="200"
                key={winningImage.id}
                src={winningImage.image}
              />
            </div>
          </div>
        )}
      </div>
      <div className="button-reset" onClick={handleReset}>
        <Button name="Reset" />
      </div>
    </div>
  );
};

export default Home;
