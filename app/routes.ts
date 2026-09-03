import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layout/base-layout.tsx", [
    index("routes/home.tsx"),
    route("artworks", "routes/artworks.tsx"),
    route("murals", "routes/murals.tsx"),
    route("sculptures", "routes/sculptures.tsx"),
    route("kulukism", "routes/kulukism.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
