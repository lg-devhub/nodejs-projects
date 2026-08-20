export enum ContentType {
  // Application
  JSON = "application/json",
  JSONLD = "application/ld+json",
  XML = "application/xml",
  PDF = "application/pdf",
  ZIP = "application/zip",
  GZIP = "application/gzip",
  OCTET_STREAM = "application/octet-stream",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  JAVASCRIPT = "application/javascript",
  WASM = "application/wasm",
  RTF = "application/rtf",
  SQL = "application/sql",
  GRAPHQL = "application/graphql",
  SOAP_XML = "application/soap+xml",
  RSS_XML = "application/rss+xml",
  ATOM_XML = "application/atom+xml",

  // Multipart
  MULTIPART_FORM_DATA = "multipart/form-data",
  MULTIPART_MIXED = "multipart/mixed",
  MULTIPART_ALTERNATIVE = "multipart/alternative",
  MULTIPART_RELATED = "multipart/related",

  // Text
  TEXT_PLAIN = "text/plain",
  TEXT_HTML = "text/html",
  TEXT_CSS = "text/css",
  TEXT_CSV = "text/csv",
  TEXT_XML = "text/xml",
  TEXT_JAVASCRIPT = "text/javascript",
  TEXT_MARKDOWN = "text/markdown",
  TEXT_EVENT_STREAM = "text/event-stream",
  TEXT_CALENDAR = "text/calendar",
  TEXT_VCARD = "text/vcard",

  // Images
  IMAGE_JPEG = "image/jpeg",
  IMAGE_PNG = "image/png",
  IMAGE_GIF = "image/gif",
  IMAGE_WEBP = "image/webp",
  IMAGE_SVG_XML = "image/svg+xml",
  IMAGE_BMP = "image/bmp",
  IMAGE_TIFF = "image/tiff",
  IMAGE_AVIF = "image/avif",
  IMAGE_ICO = "image/x-icon",
  IMAGE_APNG = "image/apng",

  // Audio
  AUDIO_MPEG = "audio/mpeg",
  AUDIO_MP4 = "audio/mp4",
  AUDIO_OGG = "audio/ogg",
  AUDIO_WAV = "audio/wav",
  AUDIO_WEBM = "audio/webm",
  AUDIO_AAC = "audio/aac",
  AUDIO_FLAC = "audio/flac",
  AUDIO_OPUS = "audio/opus",

  // Video
  VIDEO_MP4 = "video/mp4",
  VIDEO_MPEG = "video/mpeg",
  VIDEO_OGG = "video/ogg",
  VIDEO_WEBM = "video/webm",
  VIDEO_AVI = "video/x-msvideo",
  VIDEO_QUICKTIME = "video/quicktime",
  VIDEO_MATROSKA = "video/x-matroska",

  // Fonts
  FONT_WOFF = "font/woff",
  FONT_WOFF2 = "font/woff2",
  FONT_TTF = "font/ttf",
  FONT_OTF = "font/otf",

  // Archives / compressed
  APPLICATION_RAR = "application/vnd.rar",
  APPLICATION_7Z = "application/x-7z-compressed",
  APPLICATION_BZIP2 = "application/x-bzip2",
  APPLICATION_TAR = "application/x-tar",

  // Microsoft Office
  DOC = "application/msword",
  DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  XLS = "application/vnd.ms-excel",
  XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  PPT = "application/vnd.ms-powerpoint",
  PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation",

  // OpenDocument
  ODT = "application/vnd.oasis.opendocument.text",
  ODS = "application/vnd.oasis.opendocument.spreadsheet",
  ODP = "application/vnd.oasis.opendocument.presentation",

  // Other common documents
  EPUB = "application/epub+zip",
  RAR = "application/vnd.rar",
  BZIP2 = "application/x-bzip2",
  TAR = "application/x-tar",
}