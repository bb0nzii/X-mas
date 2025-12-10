function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";

  const size = Math.random() * 12 + 8;
  snowflake.style.fontSize = `${size}px`;

  snowflake.style.left = Math.random() * window.innerWidth + "px";

  const duration = Math.random() * 7 + 8; 
  snowflake.style.animationDuration = `${duration}s`;

  document.getElementById("snow-container").appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}

setInterval(createSnowflake, 250);
