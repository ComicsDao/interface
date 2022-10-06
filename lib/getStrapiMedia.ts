import { getStrapiURL } from "./api"

export function getStrapiMedia(media) {
  const image = media.data.attributes

  return image
}

export function getStrapiMediaUrl(media) {
  const url = media.data.attributes

  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
