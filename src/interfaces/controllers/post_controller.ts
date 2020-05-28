import { PostRepository } from "../database/post_repository";
import { DBConnection } from "../database/db_connection";
import { CreatePost } from "../../usecase/create_post";
import { TPost } from "../../types/post";

export class PostController {
  #post_repository: PostRepository;

  constructor(dbConnection: DBConnection) {
    this.#post_repository = new PostRepository(dbConnection);
  }

  async createPost(req: { body: TPost }, res: any) {
    const { title, body } = req.body;
    const usecase = new CreatePost(this.#post_repository);
    return usecase.execute({ title, body });
  }
}
