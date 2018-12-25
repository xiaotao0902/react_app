export function createMarkup(text) {
     
    return {__html: getWbContent(text)};
  }
   
  export const getWbContent = (content) => {
      /*
      *
      *一些标签替换等操作
      *
      */
    const contentHTML = content;

    return contentHTML;
  }
