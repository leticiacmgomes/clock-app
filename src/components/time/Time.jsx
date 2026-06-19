import { useClockStore } from "../../store/clockStore";
import { MoreButton } from "../moreButton/MoreButton";
import {
  TimeContainer,
  Greeting,
  CurrentTime,
  Location,
  AdditionalText,
} from "./Time.styles";

export const Time = () => {
  const { time, ip } = useClockStore();
  const formattedTime = new Date(time?.datetime);
  const hour = formattedTime.getHours();
  const minute = formattedTime.getMinutes();
  const location = ip?.data.location;

  return (
    <TimeContainer>
      <div>
        {time ? (
          <>
            <Greeting $hour={hour}>
              {hour < 12
                ? "good morning"
                : hour < 18
                  ? "good afternoon"
                  : hour < 22
                    ? "good evening"
                    : "good night"}
              <AdditionalText>, it's currently</AdditionalText>
            </Greeting>
            <CurrentTime>
              {hour}:{minute < 10 ? `0${minute}` : minute}
            </CurrentTime>
          </>
        ) : (
          <p>loading</p>
        )}
        {location && (
          <Location>
            in {location.city.name} , {location.country.alpha2}
          </Location>
        )}
      </div>
      <MoreButton />
    </TimeContainer>
  );
};
