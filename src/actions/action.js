export const handleImageForPreview = (item) => {
    return {
      type: "SET_PREVIEW_IMAGE",
      img: item.img,
      imgName: item.imgName,
      imgAuthor: item.imgAuthor,
      imgDate: item.imgDate,
      isImgLiked: item.isImgLiked
    }
  }
  