import { TPost } from "../types/post";

export class Post {
  #id: number;
  #title: string;
  #body: string;

  constructor({ id, title, body }: TPost) {
    this.#id = id;
    this.#title = title;
    this.#body = body;
  }

  getId() {
    return this.#id;
  }

  getTitle() {
    return this.#title;
  }

  getBody() {
    return this.#body;
  }
}
