import styled from 'styled-components'

export const SongListContainer = styled.li`
  list-style: none;
`
export const SongItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`
export const NameGenreImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`
export const NameGenre = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const SongImage = styled.img`
  width: 250px;
  border-radius: 15px;
`
export const SongName = styled.p`
  margin: 0px;
  color: #ffffff;
  font-size: 20px;
`
export const SongGenre = styled.p`
  color: #3b82f6;
  margin: 0px;
  font-size: 20px;
`
export const SongDuration = styled.p`
  color: #ffffff;
  font-size: 20px;
`
export const DeleteButton = styled.button`
  color: #cbd5e1;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 10px;
`
export const DurationDelete = styled.button`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
  border: none;
`
