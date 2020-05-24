import { TPost } from "../types/post";
import { Post } from "../entities/post";
import { AbstractPostRepository } from "./abstract_post_repository";

export class CreateTask {
  #postRepository: AbstractPostRepository;

  constructor(postRepository: AbstractPostRepository) {
    this.#postRepository = postRepository;
  }

  execute(_post: TPost) {
    const post = new Post(_post);
    return this.#postRepository.persist(post); // 永続化
  }
}
