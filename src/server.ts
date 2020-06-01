import * as express from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";
import { router } from "./infrastructure/router.ts";

await router.listen(3000);
