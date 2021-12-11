import * as S from './styles'

export type TabProps = {
  active?: boolean
  label: string
  onClick?: () => void
}

export const Tab = ({ label, active, onClick }: TabProps) => {
  return (
    <S.Wrapper active={active} onClick={onClick}>
      <span>{label}</span>

      {active ? <S.Underline layoutId="underline" /> : null}
    </S.Wrapper>
  )
}
