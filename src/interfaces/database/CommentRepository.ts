import { IDbConnection } from "./IDbConnection.ts";
import { Comment } from "../../entities/Comment.ts";
import { PostFactory } from "../../entities/PostFactory.ts";
import { PostRepository } from "./PostRepository.ts";
import { ICommentRepository } from "../../entities/ICommentRepository.ts";

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
    const postFacotry = new PostFactory(new PostRepository(this._connect));
    const parentPost = await postFacotry.create(postId);
    return [...commentRows].map((row) => {
      const [id, text] = row as [number,string];
      return new Comment({ id, text, parentPost });
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
