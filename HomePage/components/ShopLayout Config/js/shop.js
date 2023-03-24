function change(iconID) {
    if (document.getElementById(iconID).className == "search-product"||document.getElementById(iconID).className == "search-product collapsed") {
      document.getElementById(iconID).className = "search-product active";

    } else {
      document.getElementById(iconID).className = "search-product";
    }
  }