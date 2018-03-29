function getCount(str) {
    var vowelsCount = 0;
    vowelsCount =(str.match(/(a|e|i|o)/gim) || []).length;
    return vowelsCount;
}


getCount("abracadabra");
getCount("o a kak ushakov lil vo kashu kakao");
getCount("o a kak ushakov lil voasdf asdf 4 5t56567 dfjsaz  kashu kakao");