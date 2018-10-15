const serviceConfig = {
  news: {
    service: 'news',
    brandName: 'BBC News',
    articleAuthor: `https://www.facebook.com/bbcnews`,
    defaultImage:
      'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1',
    defaultImageAltText: 'BBC News',
    locale: 'en_GB',
    twitterCreator: '@BBCNews',
    twitterSite: '@BBCNews',
  },
  persian: {
    service: 'persian',
    brandName: 'BBC News فارسی',
    articleAuthor: 'https://www.facebook.com/bbcnews',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/persian.png',
    defaultImageAltText: 'BBC News فارسی',
    locale: 'fa',
    twitterCreator: '@bbcpersian',
    twitterSite: '@bbcpersian',
  },
};

export default serviceConfig;