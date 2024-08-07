declare module "quill-image-resize-module" {
  import Quill from "quill";

  interface ImageResizeOptions {
    displaySize?: boolean;
  }

  class ImageResize {
    constructor(quill: Quill, options?: ImageResizeOptions);
  }

  export default ImageResize;
}
