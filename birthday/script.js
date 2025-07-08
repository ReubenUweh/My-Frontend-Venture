document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.getElementById("envelope");
  const birthdayCard = document.getElementById("birthdayCard");
  const closeCard = document.getElementById("closeCard");
  const heartsContainer = document.getElementById("heartsContainer");
  const photoGallery = document.getElementById("photoGallery");
  const galleryGrid = document.getElementById("galleryGrid");
  const viewMoreBtn = document.getElementById("viewMoreBtn");

  let isCardOpen = false;
  let heartInterval;

  // Sample photo data (replace with your actual photos and captions)
  const photoData = [
    { src: "ur smile.jpg", caption: "That special look" },
    { src: "us.jpg", caption: "Your stare>>>>>" },
    { src: "you.jpg", caption: "My best picture of you>>>>>" },
    { src: "you2.jpg", caption: "Every moment with you is cool asf icl" },
    { src: "us2.jpg", caption: "The way you light up any room" },
  ];

  // Start floating hearts animation
  startFloatingHearts();

  // Envelope click event
  envelope.addEventListener("click", function () {
    if (!isCardOpen) {
      openCard();
    }
  });

  // Close card event
  closeCard.addEventListener("click", function (e) {
    e.stopPropagation();
    closeCardFunction();
  });

  // Close card when clicking outside
  document.addEventListener("click", function (e) {
    if (isCardOpen && !birthdayCard.contains(e.target)) {
      closeCardFunction();
    }
  });

  // View more button event
  viewMoreBtn.addEventListener("click", function () {
    loadAllPhotos();
    viewMoreBtn.style.display = "none";
  });

  function openCard() {
    envelope.classList.add("open");

    setTimeout(() => {
      birthdayCard.classList.add("show");
      isCardOpen = true;
      createHeartBurst();

      // Show photo gallery after card opens
      setTimeout(() => {
        photoGallery.style.display = "block";
        loadInitialPhotos();
      }, 500);
    }, 400);
  }

  function closeCardFunction() {
    birthdayCard.classList.remove("show");
    envelope.classList.remove("open");
    isCardOpen = false;
  }

  function startFloatingHearts() {
    const heartSymbols = ["💖", "💕", "💗", "💝", "💘", "❤️", "💙", "💜"];

    heartInterval = setInterval(() => {
      createFloatingHeart();
    }, 2000);
  }

  function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = getRandomHeart();

    // Random position along the bottom of the screen
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "-50px";

    // Random size
    const size = 0.8 + Math.random() * 0.4;
    heart.style.fontSize = size * 2 + "rem";

    // Random animation duration
    const duration = 3 + Math.random() * 2;
    heart.style.animationDuration = duration + "s";

    // Random delay
    heart.style.animationDelay = Math.random() * 0.5 + "s";

    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, (duration + 0.5) * 1000);
  }

  function createHeartBurst() {
    const heartSymbols = ["💖", "💕", "💗", "💝", "💘"];

    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.innerHTML =
          heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        // Position around the envelope
        const angle = (360 / 15) * i;
        const radius = 100 + Math.random() * 50;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.transform = `translate(${x}px, ${y}px)`;
        heart.style.fontSize = "1.5rem";
        heart.style.animationDuration = "2s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
          if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
          }
        }, 2000);
      }, i * 100);
    }
  }

  function getRandomHeart() {
    const hearts = ["💖", "💕", "💗", "💝", "💘", "❤️", "💙", "💜", "🧡", "💚"];
    return hearts[Math.floor(Math.random() * hearts.length)];
  }

  // Load initial 4 photos
  function loadInitialPhotos() {
    galleryGrid.innerHTML = "";
    for (let i = 0; i < Math.min(4, photoData.length); i++) {
      createGalleryItem(photoData[i]);
    }
  }

  // Load all photos
  function loadAllPhotos() {
    galleryGrid.innerHTML = "";
    photoData.forEach((photo) => {
      createGalleryItem(photo);
    });
  }

  // Create gallery item
  function createGalleryItem(photo) {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.className = "gallery-img";
    img.src = photo.src;
    img.alt = photo.caption;
    img.loading = "lazy";

    const caption = document.createElement("div");
    caption.className = "gallery-caption";
    caption.textContent = photo.caption;

    item.appendChild(img);
    item.appendChild(caption);
    galleryGrid.appendChild(item);
  }

  // Add sparkle effect on mouse move
  document.addEventListener("mousemove", function (e) {
    if (Math.random() < 0.1) {
      // 10% chance
      createSparkle(e.clientX, e.clientY);
    }
  });

  function createSparkle(x, y) {
    const sparkle = document.createElement("div");
    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";
    sparkle.style.fontSize = "1rem";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "1000";
    sparkle.style.animation = "sparkle 1s ease-out forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, 1000);
  }
});
