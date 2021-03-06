import { TPost } from "../types/post.ts";

export class Post {
  #id: number | null;
  #title: string;
  #body: string;

  constructor({ id, title, body }: TPost) {
    this.#id = id || null;
    this.#title = title;
    this.#body = body;
  }

  getId() {
    return this.#id;
  }

  setId(id: number) {
    this.#id = id;
  }

  getTitle() {
    return this.#title;
  }

  getBody() {
    return this.#body;
  }
}
