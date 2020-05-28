import { AbstractPostRepository } from "./abstract_post_repository.ts";

export class GetAllPosts {
  #postRepository: AbstractPostRepository;
  constructor(postRepository: AbstractPostRepository) {
    this.#postRepository = postRepository;
  }
  execute() {
    return this.#postRepository.findAll();
  }
}
