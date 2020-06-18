import { TComment } from "../types/comment.ts";

export class Comment {
  #id: number | null;
  #text: string;
  constructor({ id, text }: TComment) {
    this.#id = id || null;
    this.#text = text;
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
}
