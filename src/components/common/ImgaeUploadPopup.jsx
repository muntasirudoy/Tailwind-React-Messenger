import React, { useState } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
const defaultSrc =
  'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg'

export const ImgaeUploadPopup = () => {
  const [file, setFile] = useState()
  function handleChange(e) {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  const [image, setImage] = useState('')
  const [cropData, setCropData] = useState('#')
  const [cropper, setCropper] = useState('')

  const onChange = (e) => {
    e.preventDefault()
    let files
    if (e.dataTransfer) {
      files = e.dataTransfer.files
    } else if (e.target) {
      files = e.target.files
    }
    const reader = new FileReader()
    reader.onload = () => {
      setImage(reader.result)
      console.log(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL())
    }
  }

  return (
    <div className="flex flex-col items-center justify-start   bg-[#0f172a]/30 absolute w-full left-0 top-0 h-full rounded-lg p-4 pt-4">
      <div className="w-2/4 bg-[#242b3c]  rounded-md z-50 ">
        <div className="p-4 w-full flex justify-center">
          <p className=" text-gray-50 text-lg font-semibold">
            Update profile picture
          </p>
        </div>

        <div className="flex justify-between">
          <input type="file" onChange={onChange} />
          <div>
            <img
              className="w-[120px] h-[120px] rounded-full"
              src={cropData}
              alt="cropped"
            />
          </div>
          <button
            className=" bg-white text-black text-lg block h-10"
            onClick={getCropData}
          >
            Crop Image
          </button>
        </div>

        <div className="w-full flex">
          <Cropper
            style={{ height: 300, width: '100%' }}
            zoomTo={0.5}
            initialAspectRatio={2}
            preview=".img-preview"
            src={image}
            viewMode={0}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={true}
            responsive={true}
            autoCropArea={0}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            onInitialized={(instance) => {
              setCropper(instance)
            }}
            guides={true}
          />
        </div>
      </div>
    </div>
  )
}
