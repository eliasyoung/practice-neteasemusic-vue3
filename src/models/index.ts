export interface banner {
  imageUrl: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  url: string;
  typeTitle: string;
}

export interface songlistInfo {
  id: number;
  name: string;
  picUrl: string;
  playCount: number /*播放量 */;
  trackCount: number /* 歌单歌曲数目 */;
}
