import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  TumblrShareCount,
  VKShareCount,
} from 'next-share';

const ShareCount = () => {
  //in case of

  return ( 
    <>
    <FacebookShareCount
    url={'https://github.com/next-share'}
    appId={''}
    appSecret={''}
    /> 
    <FacebookShareCount
      url={'https://github.com/next-share'}
      appId={''}
      appSecret={''}
    >
      {shareCount => <span className="wrapper">{shareCount}</span>}
    </FacebookShareCount> 
    </>
  );
}

export default ShareCount;