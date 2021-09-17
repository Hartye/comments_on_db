const DOM = {
  loadDate() {
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    document.querySelector(".date").innerHTML = nowYear;
  },
};
