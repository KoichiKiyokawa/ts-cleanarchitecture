import { PostRepository } from "../database/post_repository.ts";
import { AbstractDBConnection } from "../database/abstract_db_connection.ts";
import { GetAllPosts } from "../../usecase/get_all_posts.ts";
import { CreatePost } from "../../usecase/create_post.ts";
import { TPost } from "../../types/post.ts";

export class PostController {
  #post_repository: PostRepository;

  constructor(dbConnection: AbstractDBConnection) {
    this.#post_repository = new PostRepository(dbConnection);
  }

  async getAllPosts() {
    console.log("controllers#getAllPosts");
    const usecase = new GetAllPosts(this.#post_repository);
    return usecase.execute();
  }

  async createPost(req: { body: TPost }, res: any) {
    const { title, body } = req.body;
    const usecase = new CreatePost(this.#post_repository);
    return usecase.execute({ title, body });
  }
}
