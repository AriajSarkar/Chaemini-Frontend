import { ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';

// Import your SVG icon from the assets folder
import uploadIcon from '../../../assets/Icons/svg/paperclip-vertical.svg';

interface ImageInputProps {
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ handleImageChange }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handlePreview = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
    handleImageChange(e);
  };

  const cancelPreview = () => {
    setPreviewImage(null);
  };

  return (
    <label htmlFor="ImageInput" className="flex items-center justify-center cursor-pointer relative">
      {previewImage ? (
        <div className="relative">
          <img src={previewImage} alt="Preview" className="w-20 h-20 rounded-md" />
          <button
            className="absolute top-0 right-0 mt-1 mr-1 p-1 bg-black rounded-full"
            onClick={cancelPreview}
            title="Cancel Preview"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm2.293-7.707a1 1 0 00-1.414-1.414L10 8.586l-1.88-1.88a1 1 0 10-1.414 1.414L8.586 10l-1.88 1.88a1 1 0 101.414 1.414L10 11.414l1.88 1.88a1 1 0 101.414-1.414L11.414 10l1.88-1.88z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ) : (
        <img src={uploadIcon} title="Insert an Image" alt="Upload Icon" className="w-6 h-6" />
      )}
      <input
        id="ImageInput"
        className="hidden"
        type="file"
        accept="image/*"
        onChange={handlePreview}
        aria-label="Upload Image"
      />
    </label>
  );
};

ImageInput.propTypes = {
  handleImageChange: PropTypes.func.isRequired,
};

export default ImageInput;
