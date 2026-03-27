import React, { FC } from "react";
import { FormattedMessage } from "react-intl";
import { Props, defaultData } from "./types";

const NotificationsSettings: FC<Props> = ({ data = defaultData, setData }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={data.showSE}
          onChange={() => setData({ ...data, showSE: !data.showSE })}
        />{" "}
        <FormattedMessage
          id="plugins.notifications.showSE"
          defaultMessage="Show Stack Exchange"
          description="Show Stack Exchange notifications checkbox label"
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={data.showWiki}
          onChange={() => setData({ ...data, showWiki: !data.showWiki })}
        />{" "}
        <FormattedMessage
          id="plugins.notifications.showWiki"
          defaultMessage="Show Wikipedia"
          description="Show Wikipedia notifications checkbox label"
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={data.showGmail}
          onChange={() => setData({ ...data, showGmail: !data.showGmail })}
        />{" "}
        <FormattedMessage
          id="plugins.notifications.showGmail"
          defaultMessage="Show Gmail"
          description="Show Gmail notifications checkbox label"
        />
      </label>
    </div>
  );
};

export default NotificationsSettings;
