import React from 'react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'
import { FormikProps } from 'formik'

type Props = {
  name: string
  id?: string
  actions: FormikProps<any>
  dropzoneOptions?: DropzoneOptions
  textFileSelect?: string
  textFileSelected?: string
  LabelAcceptedFile?: string
  labelFileRejection?: string
}

export default function DropZone (props: Props) {
  const {
    name,
    id = name,
    actions,
    dropzoneOptions,
    textFileSelect = 'Drop the files here ...',
    textFileSelected = 'Drag \'n\' drop some files here, or click to select files',
    labelFileRejection = 'Rejected files'
  } = props

  const onDrop = React.useCallback((acceptedFiles, rejectedFiles, event) => {
    actions.setFieldValue(name, acceptedFiles)
    if (dropzoneOptions?.onDrop) {
      dropzoneOptions.onDrop(acceptedFiles, rejectedFiles, event)
    }
  }, [])

  const { acceptedFiles, fileRejections, getRootProps, getInputProps, isDragActive } = useDropzone({
    ...dropzoneOptions,
    onDrop,
    multiple: dropzoneOptions?.multiple || false
  })

  return (
    <div className="dropzone-container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps({ name, id })} />
        {isDragActive
          ? <p>{textFileSelect}</p>
          : <p>{textFileSelected}</p>
        }
      </div>

      {!!acceptedFiles.length && (
        <ul>
          {acceptedFiles.map(file => (
            <li key={(file as any).path}>
              {(file as any).path} - {file.size} bytes
            </li>
          ))}
        </ul>
      )}

      {!!fileRejections.length && (
        <>
          <h3>{labelFileRejection}</h3>
          <ul>
            {fileRejections.map(({ file, errors }) => (
              <li key={(file as any).path}>
                {(file as any).path} - {file.size} bytes
                <ul>
                  {errors.map(e => (
                    <li key={e.code}>{e.message}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
