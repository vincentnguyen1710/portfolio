// Function to load header and set active page
function loadHeader() {
  $("#header-placeholder").load("header.html", function () {
    // After header is loaded, set active page
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    // Remove all active classes first
    $(".nav-link").removeClass("active");
    $(".dropdown-item").removeClass("active");

    // Set active class based on current page
    if (currentPage === "index.html" || currentPage === "") {
      $('a[href="index.html"]').addClass("active");
    } else if (currentPage === "work.html") {
      $('a[href="work.html"]').addClass("active");
    } else if (currentPage === "about.html") {
      $('a[href="about.html"]').addClass("active");
    } else if (
      [
        "design-system.html",
        "q-sign.html",
        "submit.html",
        "tanhoangdesign.html",
        "bulkbox.html",
      ].includes(currentPage)
    ) {
      // For project pages, mark Works as active and the specific project
      $('.nav-link[href="work.html"]').addClass("active");
      $(`.dropdown-item[href="${currentPage}"]`).addClass("active");
    }
  });
}

// Expose loadHeader globally so swup.js can call it
window.loadHeader = loadHeader;

$(document).ready(function () {
  // Load header on initial page load
  loadHeader();

  // Mouse move effect for hero image
  $(window).on("mousemove", function (event) {
    // Calculate the movement offset relative to the center of the window
    const moveX = (event.pageX - $(window).width() / 2) * 0.04;
    const moveY = (event.pageY - $(window).height() / 2) * 0.04;
    // Apply margins to the image
    $("#two").css({
      marginLeft: `${moveX}px`,
      marginTop: `${moveY}px`,
      marginRight: `${-moveX}px`,
      marginBottom: `${-moveY}px`,
    });
  });
});
