export type Track = {
  title: string;
  youtube?: string;
};

export type EP = {
  title: string;
  genre: string;
  spotifyAlbumId?: string;
  tracks: Track[];
};

export const EPS: EP[] = [
  {
    title: "Neon Highway",
    genre: "Cinematic synth · techno · electro rock",
    spotifyAlbumId: "5dHeKFR8BnDksIoqeKh8Jd",
    tracks: [
      { title: "The Last Light – Mega System", youtube: "https://youtu.be/G1q-96Ic-E0" },
      { title: "The Maze", youtube: "https://youtu.be/Lc3-VhyRjSU" },
      { title: "Systems Overload", youtube: "https://youtu.be/xQ_RvqzoWJg" },
      { title: "Radio Rain", youtube: "https://youtu.be/XNftWNTsEI8" },
      { title: "Electric Dawn", youtube: "https://youtu.be/J9e5Xqmckas" },
      { title: "Neon Highway", youtube: "https://youtu.be/Cl5ftb3tqDQ" },
    ],
  },
  {
    title: "Electric Cities",
    genre: "Anthemic cinematic synth-rock",
    spotifyAlbumId: "07rbmPSBNCBxlx1IVQr55w",
    tracks: [
      { title: "Electric City", youtube: "https://youtu.be/1KKGWFvu4vY" },
      { title: "Echoed Voices", youtube: "https://youtu.be/gAFo3OOVOk8" },
      { title: "You Shouldn't Be Here, Run", youtube: "https://youtu.be/XLH0U1L3fHE" },
      { title: "Stormlight", youtube: "https://youtu.be/NEJk-sAD9Fk" },
      { title: "Into The Storm", youtube: "https://youtu.be/omuB1HrcYDo" },
    ],
  },
  {
    title: "Voltage Bay: Baptism of Light",
    genre: "Cinematic electro rock",
    spotifyAlbumId: "3pWYfYok8nrW4uO3b2StHk",
    tracks: [
      { title: "Voices In The Machine", youtube: "https://youtu.be/1pq3w9VNybA" },
      { title: "Fragments of Us", youtube: "https://youtu.be/emKnSU6RHRc" },
      { title: "Echoes of The Core", youtube: "https://youtu.be/Ojgsyqqdx9A?t=425" },
      { title: "Voltage Love", youtube: "https://youtu.be/Mk9M-9_JFGY" },
      { title: "The World Begins Again", youtube: "https://youtu.be/Ojgsyqqdx9A?t=890" },
    ],
  },
];

export const SINGLES: { title: string; url: string }[] = [
  { title: "Two Sides to the One", url: "https://open.spotify.com/album/6BasIR7p9x5cqE4MCEMQFb" },
  { title: "Enemy Internal", url: "https://open.spotify.com/album/3D1yQWXA1frb4er26yr2WG" },
  { title: "Beautiful Yet Breakable", url: "https://open.spotify.com/album/3zJpiRWVz6VcQv02V0NJLI" },
  { title: "Stronger Together", url: "https://open.spotify.com/album/6mwR98WrJcshEZ7eF4eLkF" },
  { title: "Waiting Not Knowing", url: "https://open.spotify.com/album/2np38t1hNVPWdcmKG9okVP" },
  { title: "Bruce The Christmas Moose", url: "https://open.spotify.com/album/1kXOUVJMlIn9MfVbPuOixG" },
];
