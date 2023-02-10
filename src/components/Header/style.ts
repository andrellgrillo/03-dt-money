import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransaction = styled.button`
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 1rem;
  line-height: 160%;
  padding: 0.75rem 1.25rem;
  border: 0;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-300']};
    transition: background-color 0.5s;
  }
`
