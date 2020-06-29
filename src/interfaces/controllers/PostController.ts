import { PostRepository } from "../database/PostRepository.ts";
import { GetAllPosts } from "../../usecase/GetAllPosts.ts";
import { CreatePost } from "../../usecase/CreatePost.ts";
import { TPost } from "../../types/post.ts";
import { PostSerializer } from "../serializers/PostSerializer.ts";
import { IDbConnection } from "../database/IDbConnection.ts";
import { IPostRepository } from "../../entities/IPostRepository.ts";

export class PostController {
  #postRepository: IPostRepository;
  #postSerializer: PostSerializer;

  constructor(dbConnection: IDbConnection) {
    this.#postRepository = new PostRepository(dbConnection);
    this.#postSerializer = new PostSerializer();
  }

  async getAllPosts() {
    const usecase = new GetAllPosts(this.#postRepository);
    const posts = await usecase.execute();
    return this.#postSerializer.serialize(posts);
  }

  async createPost(req: { data: TPost }) {
    const { title, body } = req.data;
    const usecase = new CreatePost(this.#postRepository);
    const createdPost = await usecase.execute({ title, body });
    return this.#postSerializer.serialize(createdPost);
  }
}
