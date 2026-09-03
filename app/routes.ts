import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layout/base-layout.tsx", [
    index("routes/home.tsx"),
    route("artworks", "routes/artworks.tsx"),
    route("artworks/:artworkId", "routes/artwork-detail.tsx"),
    route("murals", "routes/murals.tsx"),
    route("murals/:artworkId", "routes/mural-detail.tsx"),
    route("sculptures", "routes/sculptures.tsx"),
    route("sculptures/:artworkId", "routes/sculpture-detail.tsx"),
    route("kulukism", "routes/kulukism.tsx"),
    route("kulukism/:artworkId", "routes/kulukism-detail.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
