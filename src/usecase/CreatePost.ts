import { TPost } from "../types/post.ts";
import { Post } from "../entities/Post.ts";
import { IPostRepository } from "../entities/IPostRepository.ts";

export class CreatePost {
  constructor(private _postRepository: IPostRepository) {}

  execute(_post: TPost): Promise<Post> {
    const post = new Post(_post);
    return this._postRepository.persist(post); // 永続化
  }
}
