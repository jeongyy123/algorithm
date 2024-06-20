const prompt = require("prompt-sync")({ sigint: true });

function birthdayEvent() {
  const input = Number(prompt("1~16번까지 숫자를 골라주세요"));
  switch (input) {
    case 1:
      console.log("1번을 선택한 당신.");
      showMenu("멋쟁이 잠옷", "https://orcite.co.kr/product/detail.html?product_no=5335&cate_no=292&display_group=1#none")
      break;

    case 2:
      console.log("2번을 선택한 당신.");
      showMenu("귀여운 그로밋 머그컵", "https://product.29cm.co.kr/catalog/2263714");
      break;

    case 3:
      console.log("3번을 선택한 당신.");
      setTimeout(() => {
        console.log("애플펜슬 커버스킨", "https://m.smartstore.naver.com/popskin/products/2773670902?NaPm=ct%3Dlrlqeuvk%7Cci%3Deaefd9a49068690e58472912439844299d26926a%7Ctr%3Dsls%7Csn%3D180926%7Chk%3D8f91b590678e38e31f79d57e413631827b8e1bca");
      }, 5000)
      break;

    case 4:
      console.log("4번을 선택한 당신.");
      failedChoosing();
      break;

    case 5:
      console.log("5번을 선택한 당신.");
      showMenu("음료 원액 베이스", "https://product.29cm.co.kr/catalog/2385496")
      break;

    case 6:
      console.log("6번을 선택한 당신.");
      failedChoosing();
      break;

    case 7:
      console.log("7번을 선택한 당신.");
      showMenu("어글리 뽀글이 개구리", "https://smartstore.naver.com/tasted/products/9463782055?NaPm=ct%3Dlriwdwso%7Cci%3D5db93a2b217fe315e554ed76bec830152bbe58ec%7Ctr%3Dsls%7Csn%3D1051657%7Chk%3D7576398c692ffb3b3a6c6d653508fae66616ee18")
      break;

    case 8:
      console.log("8번을 선택한 당신.");
      showMenu("무선 마우스", "https://smartstore.naver.com/rapoo/products/7713407637?n_media=27758&n_query=%EB%AC%B4%EC%84%A0%EB%B2%84%ED%8B%B0%EC%BB%AC%EB%A7%88%EC%9A%B0%EC%8A%A4&n_rank=1&n_ad_group=grp-a001-02-000000036793332&n_ad=nad-a001-02-000000259322454&n_campaign_type=2&n_mall_id=royche45&n_mall_pid=7713407637&n_ad_group_type=2&n_match=3&NaPm=ct%3Dlrjaqfpc%7Cci%3D0A000000aUzzScXW21pK%7Ctr%3Dpla%7Chk%3D3767849b85ed470c9328dbb9816b482ebe2dd056")
      break;

    case 9:
      console.log("9번을 선택한 당신.");
      failedChoosing()
      break;

    case 10:
      console.log("10번을 선택한 당신.");
      showMenu("예일점퍼", "https://www.musinsa.com/app/goods/3642908")
      break;

    case 11:
      console.log("11번을 선택한 당신.");
      showMenu("무선 귀청소 내시경", "https://smartstore.naver.com/nitni/products/9591140352?n_media=27758&n_query=%EA%B7%80%EB%82%B4%EC%8B%9C%EA%B2%BD&n_rank=1&n_ad_group=grp-a001-02-000000039017997&n_ad=nad-a001-02-000000275828298&n_campaign_type=2&n_mall_id=ncp_1oij0w_01&n_mall_pid=9591140352&n_ad_group_type=2&n_match=3&NaPm=ct%3Dlrn6qx9k%7Cci%3D0yC0002vMoLznkqdpKY4%7Ctr%3Dpla%7Chk%3D8aa673a1fda0a4180eb298bcf067db516f7d1acf")
      break;

    case 12:
      console.log("12번을 선택한 당신.");
      showMenu("유산균", "https://smartstore.naver.com/radiwell/products/9744966219")
      break;

    case 13:
      console.log("13번을 선택한 당신.");
      showMenu("고운발과 발을 씻자", "https://search.shopping.naver.com/aitems/products/87168571764?fromCode=NVSCTRR, https://search.shopping.naver.com/aitems/products/87053512296?fromCode=NVSCTRR")
      break;

    case 14:
      console.log("14번을 선택한 당신.");
      showMenu("밴딩 슬랙스", "https://www.musinsa.com/app/goods/967320")
      break;

    case 15:
      console.log("15번을 선택한 당신.");
      failedChoosing()
      break;

    case 16:
      console.log("16번을 선택한 당신.");
      showMenu("옥스퍼드 셔츠(흰색)", "https://www.spao.com/product/%EC%9A%B0%EB%94%94-%EC%98%A4%EB%B2%84%ED%95%8F-%EC%98%A5%EC%8A%A4%ED%8F%AC%EB%93%9C-%EC%85%94%EC%B8%A0spywe23c52/12737/category/184/display/1/#none")
      break;
  }
}

function showMenu(menu, menuUrl) {
  setTimeout(() => {
    console.log("두구두구!");
  }, 2000)
  setTimeout(() => {
    console.log("과연 윤영이에게 사줄 선물은 무엇일까?!");
  }, 3000)
  setTimeout(() => {
    console.log(`${menu}를 사주시면 됩니다!`);
  }, 5000)
  setTimeout(() => {
    console.log(`선물사이트 보기 : ${menuUrl}`);
  }, 5500)
  setTimeout(() => {
    console.log("♥ ♥ 참가해주셔서 감사합니다! ♥ ♥");
  }, 6000)
}

function failedChoosing() {
  setTimeout(() => {
    console.log("두구두구!");
  }, 2000)
  setTimeout(() => {
    console.log("과연 윤영이에게 사줄 선물은 무엇일까?!");
  }, 3000)
  setTimeout(() => {
    console.log("꽝~! 다시 뽑아주세요!");
  }, 5000)
  setTimeout(() => {
    birthdayEvent();
  }, 6000)
}

birthdayEvent();