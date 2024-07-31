const bar = document.querySelector(".bar-menu");
    const dropdown = document.querySelector(".dropdown-menu");

    bar.addEventListener("click", () => {
      const isDropdownVisible = dropdown.style.display === "block";
      dropdown.style.display = isDropdownVisible ? "none" : "block";
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener("click", (event) => {
      if (!bar.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
      }
    });