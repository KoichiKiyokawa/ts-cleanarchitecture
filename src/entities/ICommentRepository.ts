import { Comment } from "../entities/Comment.ts";
import { Post } from "../entities/Post.ts";

export interface ICommentRepository {
  findAllByPostId(postId: number): Promise<Comment[]>;
  persist(comment: Comment, parentPostId: number): Promise<Comment>;
}
