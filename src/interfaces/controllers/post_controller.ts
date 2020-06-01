import { PostRepository } from "../database/post_repository.ts";
import { AbstractDBConnection } from "../database/abstract_db_connection.ts";
import { GetAllPosts } from "../../usecase/get_all_posts.ts";
import { CreatePost } from "../../usecase/create_post.ts";
import { TPost } from "../../types/post.ts";
import { PostSerializer } from "../serializers/post_serializer.ts";

export class PostController {
  #postRepository: PostRepository;
  #postSerializer: PostSerializer;

  constructor(dbConnection: AbstractDBConnection) {
    this.#postRepository = new PostRepository(dbConnection);
    this.#postSerializer = new PostSerializer();
  }

  async getAllPosts() {
    const usecase = new GetAllPosts(this.#postRepository);
    const posts = await usecase.execute();
    return this.#postSerializer.serialize(posts);
  }

  async createPost(req: any) {
    console.log({ req });
    const { title, body } = req.data;
    const usecase = new CreatePost(this.#postRepository);
    const createdPost = await usecase.execute({ title, body });
    return this.#postSerializer.serialize(createdPost);
  }
}
