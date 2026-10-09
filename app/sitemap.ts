import type { MetadataRoute } from "next";

const BASE_URL = "https://bestcurelevishealthcare.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/products", "/contact"];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
