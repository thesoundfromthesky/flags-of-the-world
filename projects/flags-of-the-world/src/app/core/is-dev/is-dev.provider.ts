import { environment } from "projects/flags-of-the-world/src/environments/environment";

export const IsDevProvider = {
  provide: "isDev",
  useValue: !environment.production
};
