import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongItem = props => {
  const {songDetails, deleteSongItemCard} = props
  const {imageUrl, genre, duration, id, name} = songDetails
  const deleteSongItem = () => {
    deleteSongItemCard(id)
  }
  return (
    <li className="song-item-card">
      <div className="image-names-card">
        <img className="list-image" src={imageUrl} alt="track" />
        <div>
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-card">
        <p className="song-duration">{duration}</p>
        <button
          className="song-button"
          type="button"
          onClick={deleteSongItem}
          data-testid="delete"
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default SongItem