import React from "react";
import {
  fetchGmailInbox,
  fetchGmailTokens,
  fetchSEInbox,
  fetchSETokens,
  fetchWikiInbox,
  fetchWikiTokens,
} from "./api";
import "./Notifications.sass";
import PopoverIcon from "./PopoverIcon";
import { defaultData, Props } from "./types";

const Notifications = ({ cache, data = defaultData, setCache }: Props) => {
  return (
    <div className="notification-wrapper">
      {data.showSE && (
        <PopoverIcon
          icon="https://www.google.com/s2/favicons?domain=stackexchange.com&sz=256"
          accessTokenKey="se_token"
          fetchToken={fetchSETokens}
          fetchInbox={fetchSEInbox}
        />
      )}

      {data.showWiki && (
        <PopoverIcon
          icon="https://www.google.com/s2/favicons?domain=wikipedia.org&sz=256"
          accessTokenKey="wiki_token"
          fetchToken={fetchWikiTokens}
          fetchInbox={fetchWikiInbox}
        />
      )}

      {data.showGmail && (
        <PopoverIcon
          icon="https://www.google.com/s2/favicons?domain=gmail.com&sz=256"
          accessTokenKey="gmail_token"
          fetchToken={fetchGmailTokens}
          fetchInbox={fetchGmailInbox}
        />
      )}
    </div>
  );
};

export default Notifications;
