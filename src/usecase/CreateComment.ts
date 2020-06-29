import { ICommentRepository } from "../entities/ICommentRepository.ts";
import { Comment } from "../entities/Comment.ts";
import { PostFactory } from "../entities/PostFactory.ts";
import { IPostRepository } from "../entities/IPostRepository.ts";

export class CreateComment {
  constructor(
    private _postRepository: IPostRepository,
    private _commentRepository: ICommentRepository,
  ) {}
  async execute(text: string, parentPostId: number): Promise<Comment> {
    const postFactory = new PostFactory(this._postRepository);
    const post = await postFactory.create(parentPostId);
    const comment = post.comment(text);
    return this._commentRepository.persist(comment, parentPostId);
  }
}
