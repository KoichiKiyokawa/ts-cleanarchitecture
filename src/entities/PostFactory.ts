import { IPostRepository } from "./IPostRepository.ts";
import { Post } from "./Post.ts";

export class PostFactory {
  constructor(private postRepository: IPostRepository) {}

  create(postId: number) {
    return this.postRepository.findById(postId);
  }
}
