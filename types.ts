
export interface Event {
  id: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  attending: number;
  imageUrl: string;
  isLive?: boolean;
  celebrityGuest?: string;
  isFree: boolean;
}

export interface SongRequest {
  id: string;
  title: string;
  artist: string;
  votes: number;
  albumArt: string;
}

export interface Celebrity {
  id: string;
  name: string;
  type: string;
  followers: string;
  location: string;
  imageUrl: string;
  isVerified: boolean;
  upcomingEvent?: Event;
}

export enum AppScreen {
  HOME = 'home',
  EXPLORE = 'explore',
  GUESTS = 'guests',
  PARTIES = 'parties',
  PROFILE = 'profile',
  EVENT_DETAILS = 'event-details',
  APPLY = 'apply'
}
