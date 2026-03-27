import { implicitLogin, pkceLogin } from "../../../utils";
import {
  GmailApiResponse,
  InboxItem,
  SEApiResponse,
  WikiApiResponse,
} from "./types";

// you can use my client ids (they will work on chrome)
const SE_CLIENT_ID = "36170";
const WIKI_CLIENT_ID = "8c1201270efed1a1cc62c8569bc3302a";
const GOOGLE_CLIENT_ID =
  "781705443557-82hdjco54j54i2fks6ocsr17f1m6b7ef.apps.googleusercontent.com";

export const fetchSETokens = async () => {
  // Docs:
  // https://api.stackexchange.com/docs/authentication
  // https://stackapps.com/help/api-authentication

  const { access_token } = await pkceLogin({
    authUrl: "https://stackoverflow.com/oauth",
    tokenEndpoint: "https://stackoverflow.com/oauth/access_token/json",
    clientId: SE_CLIENT_ID,
    scope: "read_inbox no_expiry",
  });

  return { access_token };
};

export const fetchWikiTokens = async () => {
  // Docs: https://api.wikimedia.org/wiki/Authentication#User_authentication

  const { access_token } = await pkceLogin({
    authUrl: "https://meta.wikimedia.org/w/rest.php/oauth2/authorize",
    tokenEndpoint: "https://meta.wikimedia.org/w/rest.php/oauth2/access_token",
    clientId: WIKI_CLIENT_ID,
    grant_type: "authorization_code",
  });

  return { access_token };
};

export const fetchGmailTokens = async () => {
  // https://stackoverflow.com/questions/78151757
  // https://stackoverflow.com/questions/76528208

  const { access_token } = await implicitLogin({
    authUrl: "https://accounts.google.com/o/oauth2/v2/auth",
    scope: "https://www.googleapis.com/auth/gmail.readonly",
    clientId: GOOGLE_CLIENT_ID,
  });

  return { access_token };
};

export const fetchSEInbox = async (accessToken: string) => {
  // Docs:
  // https://api.stackexchange.com/docs/types/inbox-item
  // https://meta.stackexchange.com/questions/417382

  try {
    const res = await fetch("https://api.stackexchange.com/2.3/inbox/unread", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const json: SEApiResponse = await res.json();

    if (!res.ok) {
      console.error(json);
      return null;
    }

    const items: InboxItem[] = [];

    for (const { link, title, creation_date } of json.items) {
      items.push({ link, msg: title, time: creation_date });
    }

    return items;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const fetchWikiInbox = async (accessToken: string) => {
  // Docs: https://www.mediawiki.org/wiki/Notifications/API

  try {
    const params = new URLSearchParams({
      action: "query",
      meta: "notifications",
      notprop: "list",
      format: "json",
      notcrosswikisummary: "1",
      notformat: "model",
      notfilter: "!read",
      crossorigin: "",
    });

    const res = await fetch(`https://en.wikipedia.org/w/api.php?${params}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const json: WikiApiResponse = await res.json();

    const items: InboxItem[] = [];

    for (const { timestamp, "*": { compactHeader, links } = {} } of json.query
      .notifications.list) {
      items.push({
        link: links?.primary?.url ?? "",
        msg: compactHeader ?? "",
        time: timestamp.utcunix,
      });
    }

    items.sort((a, b) => b.time - a.time);
    return items;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const fetchGmailInbox = async (accessToken: string) => {
  // Docs:
  // https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get

  try {
    const res = await fetch(
      "https://gmail.googleapis.com/gmail/v1/users/me/messages?q=is:unread&maxResults=20",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    const json: { messages: { id: string }[] } = await res.json();

    const items: InboxItem[] = await Promise.all(
      json.messages.map(async ({ id }) => {
        const msgRes = await fetch(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          },
        );

        const { internalDate, snippet, payload }: GmailApiResponse =
          await msgRes.json();

        const email = payload.headers.find((h) => h.name === "To")!.value;
        const subject = payload.headers.find(
          (h) => h.name === "Subject",
        )!.value;

        return {
          link: `https://mail.google.com/mail/?authuser=${email}#all/${id}`,
          msg: subject ?? snippet,
          time: Number(internalDate),
        };
      }),
    );

    return items;
  } catch (err) {
    console.log(err);
    return null;
  }
};
