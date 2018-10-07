import CMS from "netlify-cms";
import FoodPreview from "./cms/essen-vorschau";
import DrinkPreview from "./cms/getraenke-vorschau";
import GalleryPreview from "./cms/gallery-vorschau";

CMS.registerPreviewStyle("../css/main.css");
CMS.registerPreviewTemplate("essen", FoodPreview);
CMS.registerPreviewTemplate("getraenke", DrinkPreview);
CMS.registerPreviewTemplate("gallery", GalleryPreview);
