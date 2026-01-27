export interface Member {
  id: string;
  name: string;
  description: string;
}

export type MemberRowProps = {
  member: Member;
}