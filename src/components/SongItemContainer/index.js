import {AiFillDelete} from 'react-icons/ai'

import {
  SongListContainer,
  SongImage,
  SongName,
  SongGenre,
  SongDuration,
  SongItem,
  NameGenre,
  NameGenreImage,
  DeleteButton,
  DurationDelete,
} from './styledComponents'

const SongItemContainer = props => {
  const {songDetails} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onDeleteSong = () => {
    const {deleteSong} = props
    deleteSong(id)
  }
  return (
    <SongListContainer>
      <SongItem>
        <NameGenreImage>
          <SongImage src={imageUrl} alt="track" />
          <NameGenre>
            <SongName>{name}</SongName>
            <SongGenre>{genre}</SongGenre>
          </NameGenre>
        </NameGenreImage>
        <DurationDelete>
          <SongDuration>{duration}</SongDuration>
          <DeleteButton type="button" onClick={onDeleteSong} testid="delete">
            <AiFillDelete />
          </DeleteButton>
        </DurationDelete>
      </SongItem>
    </SongListContainer>
  )
}

export default SongItemContainer
