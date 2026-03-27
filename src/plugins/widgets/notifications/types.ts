import { API } from "../../types";

export type Props = API<Data>;

export type Data = {
  showWiki: boolean;
  showSE: boolean;
  showGmail: boolean;
  // showSlack: boolean;
  // showGithub: boolean;
  // showReddit: boolean;
  // showDiscord: boolean;
};

export const defaultData: Data = {
  showWiki: true,
  showSE: true,
  showGmail: true,
};

export type InboxItem = {
  link?: string;
  msg: string;
  time: number;
};

export type Inbox = InboxItem[] | null;

export type UseInboxParams = {
  fetchToken: () => Promise<{ access_token: string | undefined }>;
  fetchInbox: (token: string) => Promise<Inbox>;
  accessTokenKey: string;
};

export type PopoverIconProps = UseInboxParams & { icon: string };

export type IconBadgeProps = {
  count?: number;
  icon: string;
};

export type SEApiResponse = {
  items: Array<{
    link: string;
    title: string;
    creation_date: number;
  }>;
};

export type WikiApiResponse = {
  query: {
    notifications: {
      list: Array<{
        timestamp: { utcunix: number };
        "*": {
          compactHeader: string;
          links: {
            primary: {
              url?: string;
            };
          };
        };
      }>;
    };
  };
};

export type GmailApiResponse = {
  id: string;
  internalDate: string;
  snippet: string;
  payload: {
    headers: Array<{ name: string; value: string }>;
  };
};
