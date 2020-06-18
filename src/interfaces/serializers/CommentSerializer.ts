import { Comment } from "../../entities/Comment.ts";

export class CommentSerializer {
  private serializeSingle(comment: Comment) {
    return {
      id: comment.getId(),
      text: comment.getText(),
    };
  }

  serialize(comments: Comment | Comment[]) {
    if (Array.isArray(comments)) return comments.map(this.serializeSingle);
    else return this.serializeSingle(comments);
  }
}
