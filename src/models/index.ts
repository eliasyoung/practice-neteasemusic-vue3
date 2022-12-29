export interface banner {
  imageUrl: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  url: string;
  typeTitle: string;
}

export interface baseInfo {
  id: number;
  name: string;
  picUrl: string;
}

export interface songlistInfo extends baseInfo {
  playCount: number /*播放量 */;
  trackCount: number /* 歌单歌曲数目 */;
}

export interface privateContent extends baseInfo {
  sPicUrl: string;
}

export interface songInfo extends baseInfo {
  canDislike: boolean;
  song: song;
}

export interface song {
  album: album;
  alias: string[];
  artists: artist[];
}

export interface album extends baseInfo {
  alias: string[];
  company: string;
  artists: artist[];
  publishTime: number;
  size: number;
}

export interface artist extends baseInfo {}
