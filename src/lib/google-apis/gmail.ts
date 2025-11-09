import { google } from 'googleapis';

export async function getRecentEmails(accessToken: string, maxResults = 10) {
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  const response = await gmail.users.messages.list({
    userId: 'me',
    maxResults,
    q: 'is:unread OR is:important'
  });

  const messages = await Promise.all(
    (response.data.messages ?? []).map(async (message) => {
      const detail = await gmail.users.messages.get({ userId: 'me', id: message.id! });
      return detail.data;
    })
  );

  return messages;
}
