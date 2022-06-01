// 参加者の名前
const MemberNameAbematsu = "あべまつ";
const MemberNameOkawauchi = "おおかわうち";
const MemberNameTamaru = "たまる";
const MemberNameNakashima = "なかしま";
const MemberNameNasu = "なす";
const MemberNameMatsumoto = "まつもと";
const MemberNameMishima= "みしま";

// メンバーリスト
export const MemberList = new Map([
  [MemberNameAbematsu,  0],
  [MemberNameOkawauchi, 1],
  [MemberNameTamaru,    2],
  [MemberNameNakashima, 3],
  [MemberNameNasu,      4],
  [MemberNameMatsumoto, 5],
  [MemberNameMishima,   6],
]);

// ミスマッチメンバーリスト
export const MissmatchMemberList = new Map([
  [MemberNameAbematsu,  [MemberNameNasu, MemberNameMishima]],
  [MemberNameOkawauchi, [MemberNameMatsumoto,]],
  [MemberNameTamaru,    [MemberNameNakashima,]],
  [MemberNameNakashima, [MemberNameTamaru,]],
  [MemberNameNasu,      [MemberNameAbematsu, MemberNameMishima]],
  [MemberNameMatsumoto, [MemberNameOkawauchi,]],
  [MemberNameMishima,   [MemberNameAbematsu, MemberNameNasu]],
]);