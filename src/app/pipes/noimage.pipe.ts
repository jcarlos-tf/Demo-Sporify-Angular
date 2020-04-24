import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "noimage",
})
export class NoimagePipe implements PipeTransform {
  //arreglo de las imagenes, es un string
  transform(images: any[]): string {
    if (!images) {
      return "../../assets/images/noimage.png";
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return "../../assets/images/noimage.png";
    }
  }
}
