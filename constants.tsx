
import { Event, Celebrity, SongRequest } from './types';

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Neon Jungle Rave',
    venue: 'Hammerzz',
    city: 'Goa',
    date: 'Oct 22',
    time: '09:00 PM',
    attending: 1200,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM486z3IxjtGaEkStAhpHB1mCyF3b4X4Dit5G_k4tLy5D7X88VlSp1qDzKCHpFH75TA8q1FtwEepHlr2UvWBiUE1gY8NHT62XYOsMA6Pc6z2gmdQ97fb6YZb18NSQWiWkRLqSx9l5WsLe2acBgNTZbYP-HvWO6MOhKj9A66JZvq97SvfitVVjy6RTB20AmYQtPqpvaRVp1WpI_AwMCP2htCVVj8D92675yGykyoTbz9NRwqxiGz8nNltPpRqeoMWFas1BfKs8d6Xo',
    isLive: true,
    celebrityGuest: 'Ritviz',
    isFree: true
  },
  {
    id: '2',
    title: 'Retro Disco Night',
    venue: 'The Mansion',
    city: 'Mumbai',
    date: 'Oct 24',
    time: '10:00 PM',
    attending: 450,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0AQlIdicuf1DxtgcIqDdppB6s3UF05_jubh-MLW2l5iqWL_PRb8zGVHY3kTU4WlfYZ4N_ZITB8MJs1S3yGi_THsrIa-dKd9DVTYq9ZaNdJeJHOdqH7PC9ZU5t07RzTkNOIaohOUkCB7lFwPC3iuhZrZWpoAPBxRT9UjvwoMGT0DHRHyilNmnP2k0riiVCurOtCK_p6KzrbJp9pvKfKdATplk3pdDzhfpaZdNP1Uo2F1u9auazUAyAddNMyI3n_0kQp1E8Yzu6FOs',
    isLive: true,
    isFree: true
  }
];

export const UPCOMING: Event[] = [
  {
    id: 'u1',
    title: 'Psytrance Sunday',
    venue: 'Prive Club',
    city: 'Mumbai',
    date: 'Oct 22',
    time: '09:00 PM',
    attending: 850,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzaLOrr8cLKZYxhpFqco8VhZHZKvH0qdjhooqI_-WBfpHEz2xcKyi3qSzCSWHlzKCyEkiR4QidxQHx959H3BUsUfNGvVKiu59iSAeVg6FajAE89xjFxaa08cDFsUSI7eR0ggon0zfagzU-KVLhRgB3Zb8dV83MNCmDjGE5q32VMDRwTZA5lVX3iTVg9khQUBFLUMJH78pT4M8K6ffsfIIjYGbB9oORxkhW1TAKqXfXRUbSopdvk-Sgbd4U6DdHFeWEhQF6EAz3BU8',
    isFree: true
  },
  {
    id: 'u2',
    title: 'Techno Warehouse',
    venue: 'Grand Hyatt',
    city: 'Mumbai',
    date: 'Oct 24',
    time: '10:00 PM',
    attending: 2100,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_ebtRr5aoy8ygBqMtxk1skEm0sXOxTotjM8xZ0D9YN_2nwgYn9LUGVyWZLk6MbKzrHkMPYyoe_fJtDC2jebUaQjMXb7bXNHEvGNGS8eCb5CHLaabpHNpWJClKLKIZUIbKjok1sabrApsgZ6yhjUNKuwnV32SgLF9itEcxVOiV9o3fWW972iMSj_HLYjvx5xHLKh6RGPi0UrMk7gu8_YXFURy8okSbSbJ0i_w-xG77geStq1xCsHYXiYC2QvjMnKYXCTjpO5MFlpI',
    isFree: true
  }
];

export const GUESTS_LIST: Celebrity[] = [
  {
    id: 'c1',
    name: 'Riya Sharma',
    type: 'Top Influencer',
    followers: '1.2M',
    location: 'Mumbai',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY08hLUAIeKhhOQto00_Uu6cImAyeST-GLelqWNcVSU3wQqcwTgqW7PYjPV9TBH7-tz6fl88WwMVUu83tdPcoAI9qsokMiGYouFIUJDj1ZJ1S6mavK5NbosvcmJWEzPSrfP48wmp6d_mZ9utWe_9cpyVG9bSKRXqjjgTVWg10bcXXbnPI4VcD5Fbij-Sd0WthuO9xIYA6QUdfn1PA_w7EczzgzaHanNirqCRPPAgTXYVteZkkgX1dlfozjvk37Fd-qJwTuagU1Sxg',
    isVerified: true
  },
  {
    id: 'c2',
    name: 'DJ Aristhos',
    type: 'Electronic Music Artist',
    followers: '850K',
    location: 'Delhi',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8qPkL2jgtP3lwdmewTMqgjNVRzJIMLr5kde_uy-0Zd6a0F3-nezcY2Mti5zRKsEvNSEm1HR2u86GCCwiGthjeTLj4tWaxkBftPmmXEu8bTMfhYmCTAV506dBuYSED7z-CIbMfY9Snl8qq18YRkSh4nCfGTIWZt1fEiYKfuNKGWnLNgOSbPqW5vYgaYFF3ANBQWsfJPhS7bRuWMDgi0vvJvglXgkRkBaqiAPiV1n9-jsbnHB4DiqRl5LRSS6q-7njspkYjPiaNL_g',
    isVerified: true,
    upcomingEvent: UPCOMING[0]
  }
];

export const SONGS_QUEUE: SongRequest[] = [
  { id: 's1', title: 'Blinding Lights', artist: 'The Weeknd', votes: 42, albumArt: 'https://picsum.photos/id/1/200/200' },
  { id: 's2', title: 'Desi Kalakaar', artist: 'Yo Yo Honey Singh', votes: 28, albumArt: 'https://picsum.photos/id/2/200/200' },
  { id: 's3', title: 'Levitating', artist: 'Dua Lipa', votes: 15, albumArt: 'https://picsum.photos/id/3/200/200' }
];
