import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 80px;
  padding-bottom: 30px;
  background-color: #152850;
`
export const SingerName = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  margin: 0px;
`
export const Singer = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  margin: 0px;
`
export const SongsContainer = styled.div`
  background-color: #152850;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
`
export const SongsPlaylist = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const SearchInputContainer = styled.div`
  background-color: transparent;
  border: #cbd5e1 2px solid;
  border-radius: 5px;
  height: 30px;
  width: 200px;
  padding-top: 2px;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const InputContainer = styled.input`
  border: transparent;
  background-color: transparent;
  height: 25px;
  outline: none;
  color: #cbd5e1;
`
export const SongsListContainer = styled.ul`
  height: 392px;
  overflow: auto;
  margin-right: 20px;
  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #cbd5e1;
  }
`
export const NoSongs = styled.p`
  color: #cbd5e1;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`
export const TracksContainer = styled.div`
  background-color: #152850;
  height: 408px;
`
