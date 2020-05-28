import * as express from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";
import { router } from "./infrastructure/router.ts";

router.use(express.simpleLog());
await router.listen(3000);
