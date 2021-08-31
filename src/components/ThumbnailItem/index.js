import './index.css'

const ThumbnailItem = props => {
  const {imagesList, clickThumbnailItem, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList

  const onClickButton = () => {
    clickThumbnailItem(id)
  }

  const isActiveClassName = isActive ? `thumbnail selected` : `thumbnail`

  return (
    <li className="listItem">
      <button className="button" type="button" onClick={onClickButton}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={isActiveClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
