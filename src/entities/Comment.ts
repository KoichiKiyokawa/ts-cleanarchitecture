import { TComment } from "../types/comment.ts";
import { Post } from "./Post.ts";

export class Comment {
  #id: number | null;
  #text: string;
  #parentPost: Post;

  constructor({ id, text, parentPost }: TComment & { parentPost: Post }) {
    this.#id = id || null;
    this.#text = text;
    this.#parentPost = parentPost;
  }

  getId() {
    return this.#id;
  }

  setId(id: number) {
    this.#id = id;
  }

  getText() {
    return this.#text;
  }

  getParentPost() {
    return this.#parentPost;
  }
}
