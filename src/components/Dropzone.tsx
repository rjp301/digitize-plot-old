import React, { Dispatch, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone({
  files,
  setFiles,
}: {
  files: File[];
  setFiles: Dispatch<File[]>;
}) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    },
    [setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    // files.forEach((file) => URL.revokeObjectURL(file.preview));
    console.log("files", files);
  }, [files]);

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : files.length > 0 ? (
        files.map((file) => <img src={URL.createObjectURL(file)} alt="img" />)
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
