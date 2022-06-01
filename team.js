export class Team{

  constructor(numOfMembers) {
    // チームメンバー数
    this.NumOfMembers = numOfMembers;
    this.Members = new Array();
  }

  // メンバーアサイン済判定
  AssignCompleted() {
    if (this.Members.length >= this.NumOfMembers) {
      return true;
    }
    return false;
  }

  // メンバー追加可能判定
  IsAaddiable(mismatchList, addTargeName) {
    
    // ミスマッチメンバー取得
    let mismatchMembers = mismatchList.get(addTargeName);
    
    // console.log("addTargeName:" + addTargeName);
    // console.log("compareList:" + this.Members);
    // console.log("mismatchMembers:" + mismatchMembers);

    // チームへ追加済みメンバーとミスマッチメンバーが一致しないかチェック
    let judgementResult = true;
    this.Members.forEach((value) => {
      if (mismatchMembers != null && mismatchMembers.find(element => element == value)) {
        judgementResult = false;
      }
    })
    return judgementResult;
  }

  // メンバー追加
  Add(memberName) {
    if (this.Members.length <= this.NumOfMembers) {
      this.Members.push(memberName);
    }
  }
}