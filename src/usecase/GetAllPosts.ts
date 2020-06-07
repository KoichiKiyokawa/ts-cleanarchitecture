import { IPostRepository } from "./IPostRepository.ts";

export class GetAllPosts {
  constructor(private _postRepository: IPostRepository) {}

  execute() {
    return this._postRepository.findAll();
  }
}
