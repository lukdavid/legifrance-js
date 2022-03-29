import ArticleVersion, { ArticleVersionRaw } from './articleVersion';

class Article {
  cid: string;

  num: string;

  versions: ArticleVersion[];

  constructor(cid: string, rawVersions: ArticleVersionRaw[]) {
    this.cid = cid;
    this.num = rawVersions[0].num;
    this.versions = rawVersions.map(
      (rawVersion) => new ArticleVersion(rawVersion),
    );
  }
}

export default Article;
