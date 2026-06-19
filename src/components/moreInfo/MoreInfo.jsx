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
      label: "current timezone",
      info: time.timezone.replace("_", " "),
    },
    {
      label: "day of the year",
      info: time.day_of_year,
    },
    {
      label: "day of the week",
      info: time.day_of_week,
    },
    {
      label: "week number",
      info: time.week_number,
    },
  ];
  return (
    <MoreInfoContainer>
      {time && (
        <>
          {infos.map((info) => (
            <InfoContainer>
              <InfoLabel>{info.label}</InfoLabel>
              <InfoText>{info.info}</InfoText>
            </InfoContainer>
          ))}
        </>
      )}
    </MoreInfoContainer>
  );
};
