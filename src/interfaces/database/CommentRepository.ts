import { ICommentRepository } from "../../usecase/ICommentRepository.ts";
import { IDbConnection } from "./IDbConnection.ts";
import { Post } from "../../entities/Post.ts";
import { Comment } from "../../entities/Comment.ts";

export class CommentRepository implements ICommentRepository {
  constructor(private _connect: IDbConnection) {}

  async findAllByPostId(postId: number) {
    const commentRows: any = await this._connect.execute(
      `
        SELECT comments.id, comments.text
        FROM comments
        WHERE post_id = ?
      `,
      [postId],
    );
    return [...commentRows].map((row) => {
      const [id, text] = row;
      return new Comment({ id, text });
    });
  }

  async persist(comment: Comment, parentPostId: number) {
    const savedComment = await this._connect.execute(
      "INSERT INTO comments (post_id, text) VALUES (?, ?)",
      [parentPostId, comment.getText()],
    );
    comment.setId(savedComment.id);
    return comment;
  }
}
