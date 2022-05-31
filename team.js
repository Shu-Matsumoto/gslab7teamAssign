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

  // メンバー追加
  Add(memberName) {
    if (this.Members.length <= this.NumOfMembers) {
      this.Members.push(memberName);
    }
  }
}