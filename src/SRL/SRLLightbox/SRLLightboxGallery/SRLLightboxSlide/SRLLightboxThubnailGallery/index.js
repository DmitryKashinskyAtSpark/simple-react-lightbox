import React from "react";
import PropTypes from "prop-types";
import {
  SRLLightboxThubnailGallery,
  SRLLightboxThubnailGalleryImage
} from "../../styles";

const SRLLightboxThubnailGalleryComponent = ({
  elements,
  currentId,
  handleCurrentElement
}) => {
  return (
    <SRLLightboxThubnailGallery className="SRLThumbnails">
      {elements.map((i, index) => {
        return (
          <SRLLightboxThubnailGalleryImage
            onClick={() => handleCurrentElement(i.id)}
            key={index}
            className={`SRLThumb SRLThumb${index} ${
              currentId === i.id ? "SRLSelected" : ""
            }`}
            style={{ backgroundImage: `url("${i.source}")` }}
          />
        );
      })}
    </SRLLightboxThubnailGallery>
  );
};

export default SRLLightboxThubnailGalleryComponent;

SRLLightboxThubnailGalleryComponent.propTypes = {
  elements: PropTypes.array,
  handleCurrentElement: PropTypes.func,
  currentId: PropTypes.string
};
