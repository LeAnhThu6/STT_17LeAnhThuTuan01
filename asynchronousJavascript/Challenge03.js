function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      document.querySelector(".images").appendChild(img);
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error(`Error loading image: ${imgPath}`));
    });
  });
}

// Helper function to pause execution for a specified number of seconds
function wait(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

// Part 1
async function loadNPause() {
  try {
    const img1 = await createImage("img/img-1.jpg");
    await wait(2);
    img1.style.display = "none";

    const img2 = await createImage("img/img-2.jpg");
    await wait(2);
    img2.style.display = "none";
  } catch (error) {
    console.error(error.message);
  }
}

// Part 2
async function loadAll(imgArr) {
  try {
    const imgs = await Promise.all(
      imgArr.map((imgPath) => createImage(imgPath))
    );
    imgs.forEach((img) => img.classList.add("parallel"));
  } catch (error) {
    console.error(error.message);
  }
}

// Test data for Part 2
const imagePaths = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];

// Test the image loading and pausing
loadNPause();

// Test loading all images in parallel
loadAll(imagePaths);
