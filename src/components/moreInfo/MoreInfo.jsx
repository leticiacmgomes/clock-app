import {
  InfoContainer,
  InfoLabel,
  InfoText,
  MoreInfoContainer,
} from "./MoreInfo.styles";
import { useClockStore } from "../../store/clockStore";

export const MoreInfo = () => {
  const { time } = useClockStore();

  const infos = [
    {
      id: 1,
      label: "current timezone",
      info: time?.timezone.replace("_", " "),
    },
    {
      id: 2,
      label: "day of the year",
      info: time?.day_of_year,
    },
    {
      id: 3,
      label: "day of the week",
      info: time?.day_of_week,
    },
    {
      id: 4,
      label: "week number",
      info: time?.week_number,
    },
  ];
  return (
    <MoreInfoContainer>
      {time && (
        <>
          {infos.map((info) => (
            <InfoContainer key={info.id}>
              <InfoLabel>{info.label}</InfoLabel>
              <InfoText>{info.info}</InfoText>
            </InfoContainer>
          ))}
        </>
      )}
    </MoreInfoContainer>
  );
};
