import { useClockStore } from "../../store/clockStore"
import { IconArrow, MoreButtonContainer } from "./MoreButton.styles"


export const MoreButton = () => {
    const { isMoreActive, toggleMore } = useClockStore();

  return (
    <MoreButtonContainer onClick={toggleMore}>
        {isMoreActive ? 'less' : 'more'}
        <IconArrow $isMoreActive={isMoreActive} />
    </MoreButtonContainer>
  )
}
