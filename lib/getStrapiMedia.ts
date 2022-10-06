import { getStrapiURL } from "./api"

export function getStrapiMedia(media, format) {
  const image = format
    ? media.data.attributes.formats[format]
    : media.data.attributes

  return image
}

export function getStrapiMediaUrl(media, format) {
  const url = format
    ? media.data.attributes.formats[format]
    : media.data.attributes

  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
