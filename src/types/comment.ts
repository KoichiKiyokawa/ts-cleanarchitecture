export type TComment = {
  id?: number;
  // TODO: dbにはスネークケースで登録されているけど、どうしよう...
  postId?: number;
  text: string;
};
