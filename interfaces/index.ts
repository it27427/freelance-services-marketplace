export interface UserType {
  _id: number;
  name: string;
  email: string;
  clerkUserId: string;
  profilePic: string;
}

export interface TaskType {
  _id: string;
  user: UserType;
  title: string;
  subTitle: string;
  lastDateToPlaceBid: string;
  skillsRequired: string[];
  description: string;
  attachments: { name: string; url: string }[];
  createdAt: string;
}
