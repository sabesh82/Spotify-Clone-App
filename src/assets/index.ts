import song1 from "./song1.mp3";
import song2 from "./song2.mp3";
import song3 from "./song3.mp3";
import song4 from "./song4.mp3";
import song5 from "./song5.mp3";
import song6 from "./song6.mp3";

// Dynamically import all jpg files from the assets folder
const images = import.meta.glob("./*.jpg", { eager: true, import: "default" });
const imageArray = Object.values(images) as string[];

// Split images: last 10 as songs, first 6 as featured playlist covers
const songList = imageArray.slice(-10);
const featuredList = imageArray.slice(0, 6);

// Define interfaces
interface FeaturedItem {
  title: string;
  img: string;
  desc: string;
  songs: SongItem[];
}

interface SongItem {
  title: string;
  artist: string;
  img: string;
  file: string;
}

// List of mp3s to rotate through
const audioFiles = [song1, song2, song3, song4, song5, song6];

// Define featured playlists with different titles, desc, and songs
const featuredPlaylists: FeaturedItem[] = [
  {
    title: "Top Vibes",
    img: featuredList[0],
    desc: "Feel the energy of the latest top-charting tracks.",
    songs: songList.slice(0, 5).map((img, i) => ({
      title: `Vibe Song ${i + 1}`,
      artist: `DJ Vibe ${i + 1}`,
      img,
      file: audioFiles[i % audioFiles.length],
    })),
  },
  {
    title: "Chill Lounge",
    img: featuredList[1],
    desc: "Relax with smooth and mellow tunes.",
    songs: songList.slice(2, 7).map((img, i) => ({
      title: `Chill Track ${i + 1}`,
      artist: `Lofi Artist ${i + 1}`,
      img,
      file: audioFiles[(i + 1) % audioFiles.length],
    })),
  },
  {
    title: "Party Hits",
    img: featuredList[2],
    desc: "Get the party started with these dance anthems.",
    songs: songList.slice(4, 9).map((img, i) => ({
      title: `Party Jam ${i + 1}`,
      artist: `DJ Party ${i + 1}`,
      img,
      file: audioFiles[(i + 2) % audioFiles.length],
    })),
  },
  {
    title: "Acoustic Moods",
    img: featuredList[3],
    desc: "acoustic songs to soothe your soul.",
    songs: songList.slice(1, 6).map((img, i) => ({
      title: `Acoustic Song ${i + 1}`,
      artist: `Acoustic Artist ${i + 1}`,
      img,
      file: audioFiles[i % audioFiles.length],
    })),
  },
  {
    title: "Hip Hop Beats",
    img: featuredList[4],
    desc: "hip hop tracks from around the world.",
    songs: songList.slice(3, 8).map((img, i) => ({
      title: `Hip Hop Track ${i + 1}`,
      artist: `MC Flow ${i + 1}`,
      img,
      file: audioFiles[(i + 1) % audioFiles.length],
    })),
  },
  {
    title: "Classic Rock",
    img: featuredList[5],
    desc: "Legendary rock hits from the golden era.",
    songs: songList.slice(0, 5).map((img, i) => ({
      title: `Rock Classic ${i + 1}`,
      artist: `Rock Band ${i + 1}`,
      img,
      file: audioFiles[(i + 2) % audioFiles.length],
    })),
  },
];

// Create top hits list
const topHits: SongItem[] = songList.map((img, i) => ({
  title: `Hit ${i + 1}`,
  artist: `Artist ${String.fromCharCode(65 + i)}`,
  img,
  file: audioFiles[i % audioFiles.length],
}));

// Final export object
const assets = {
  featured: featuredPlaylists,
  hits: topHits,
};

export type { FeaturedItem, SongItem };
export default assets;
