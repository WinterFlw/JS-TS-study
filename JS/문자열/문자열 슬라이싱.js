let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

let hyungdon = null;

// 여기에 코드를 작성하세요
function sliceLyrics(lyrics, memberName){
  // memberLyrics라는 변수는 가사를 담는 부분,
  // 일단 slice를 통해 맴버 이름 앞부분을 자른다.
  let memberLyrics = lyrics.slice(lyrics.indexOf(memberName))
  // 이제 맨 앞 문자열은 [이다. [를 기준으로 슬라이싱 하므로,
  // 뒤에서 샌 [가 0이 아닐때까지 자른다. 이를 통해 다른 맴버의 가사를 다 자른다.
  while (memberLyrics.lastIndexOf('[') != 0){
    memberLyrics = memberLyrics.slice(0,memberLyrics.lastIndexOf('['))
  }
  return memberLyrics
}

hyungdon = sliceLyrics(lyrics, '[형돈]')
// 테스트 코드
console.log(hyungdon);
