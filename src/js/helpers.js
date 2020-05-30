export const stringHandler = {
  imagePath: function (string) {
    return string.toLowerCase().replace(/[\s\']/g, "");
  }
}

export const numberHandler = {
  numberAlert: function (number) {
    alert(number)
  }
}