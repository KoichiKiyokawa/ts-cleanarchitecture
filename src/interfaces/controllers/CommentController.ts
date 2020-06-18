import { CommentRepository } from "../database/CommentRepository.ts";
import { ICommentRepository } from "../../usecase/ICommentRepository.ts";
import { IDbConnection } from "../database/IDbConnection.ts";
import { CommentSerializer } from "../serializers/CommentSerializer.ts";
import { CreateComment } from "../../usecase/CreateComment.ts";
import { GetComments } from "../../usecase/GetComments.ts";

export class CommentController {
  #commentRepository: ICommentRepository;
  #commentSerializer: CommentSerializer;

  constructor(dbConnection: IDbConnection) {
    this.#commentRepository = new CommentRepository(dbConnection);
    this.#commentSerializer = new CommentSerializer();
  }

  async getCommentsByPostId(req: { params: { [key: string]: string } }) {
    const postId = Number(req.params.postId);
    const usecase = new GetComments(this.#commentRepository);
    const comments = await usecase.execute(postId);
    return this.#commentSerializer.serialize(comments);
  }

  async addCommentTo(
    req: { data: { text: string }; params: { [key: string]: string } },
  ) {
    const { data:{text} } = req;
    const postId = Number(req.params.postId);
    const usecase = new CreateComment(this.#commentRepository);
    const addedComment = await usecase.execute({ text }, postId);
    return this.#commentSerializer.serialize(addedComment);
  }
}
