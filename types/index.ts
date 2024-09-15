export interface IPlayList {
  id: number;
  owner: string;
  playlistName: string;
  songList: ISong[];
}

export interface ISong {
  name: string;
  channelId: number;
  channel: string;
  src: string;
  imageSrc: string;
}

export interface IChannel {
  id: number; // 채널 아이디
  subscribers: number; // 구독자 수
  name: string;
  songList: ISong[];
  playlistArray: IPlayList[];
}

// ITopSong은 ISong의 prop을 상속받는다.
export interface ITopSong extends ISong {
  // ISong 상속받은  props
  // name: string
  // channelId: number;
  // channel: string;
  // src: string;
  // imageSrc: string;
  prevRank: number; // 이전 순위
  rank: number; // 현 순위
}
