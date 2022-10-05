import React, { Dispatch, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ImageType from "../types/Image";

export default function Dropzone({ setImage }: { setImage: Dispatch<ImageType> }) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const img = new Image();
      const url = URL.createObjectURL(acceptedFiles[0]);

      img.src = url;
      img.onload = () => {
        setImage({
          height: img.height,
          width: img.width,
          src: url,
        });
      };
      img.onerror = (err) => {
        console.log("img error");
        console.error(err);
      };
    },
    [setImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
