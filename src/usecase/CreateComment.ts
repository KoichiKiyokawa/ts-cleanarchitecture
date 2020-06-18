import { ICommentRepository } from "./ICommentRepository.ts";
import { Post } from "../entities/Post.ts";
import { Comment } from "../entities/Comment.ts";
import { TComment } from "../types/comment.ts";

export class CreateComment {
  constructor(private _commentRepository: ICommentRepository) {}
  execute(_comment: TComment, parentPostId: number): Promise<Comment> {
    const comment = new Comment(_comment);
    return this._commentRepository.persist(comment, parentPostId);
  }
}
