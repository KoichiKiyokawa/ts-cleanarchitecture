import { ICommentRepository } from "./ICommentRepository.ts";

export class GetComments {
  constructor(private _commentRepository: ICommentRepository) {}

  execute(postId: number) {
    return this._commentRepository.findAllByPostId(postId);
  }
}
