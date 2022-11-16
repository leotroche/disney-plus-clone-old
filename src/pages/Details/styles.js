import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  min-height: 100vh;
  width: 75%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1.6rem;
  padding: 3rem;

  font-size: 2rem;
`

export const Title = styled.h2`
  font-size: 6rem;
  font-weight: 700;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Bottom = styled(Top)``

export const TrailerButton = styled.button`
  background-color: rgba(0, 0, 0, 0.4);
  color: rgb(249, 249, 249);
  
  border: 2px solid rgb(249, 249, 249);
  border-radius: 0.8rem;

  letter-spacing: 1.8px;
  font-weight: 700;
  
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94);

  :hover {
    background: rgba(255, 255, 255, 0.95);
    color: #000;
    border-color: #000;
  }
`

export const PlayButton = styled(TrailerButton)`
  background-color: rgb(249, 249, 249);
  color: #000;
  border-color: #000;

  :hover {
    background-color: rgba(255, 255, 255, 0.85);
  }
`

export const WatchListButton = styled(TrailerButton)`
  height: 100%;
  width: 6rem;
  text-align: center;

  i {
    font-size: 3rem;
  }
`

export const Bg = styled.div`
  background-image: radial-gradient(
    farthest-side at 73% 21%,
    transparent,
    /* #1a1d29 */
    #0f1014
  );

  position: absolute;
  inset: 0;
`

export const Backdrop = styled.img`
  position: fixed;
  inset: 0;
  z-index: -1;

  height: 100vh;
  object-fit: cover;
`
