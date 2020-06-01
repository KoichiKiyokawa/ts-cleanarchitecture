import { TPost } from "../types/post.ts";
import { Post } from "../entities/post.ts";
import { AbstractPostRepository } from "./abstract_post_repository.ts";

export class CreatePost {
  #postRepository: AbstractPostRepository;

  constructor(postRepository: AbstractPostRepository) {
    this.#postRepository = postRepository;
  }

  execute(_post: TPost): Promise<Post> {
    const post = new Post(_post);
    return this.#postRepository.persist(post); // 永続化
  }
}
