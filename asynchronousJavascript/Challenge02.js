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

function wait(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function loadImageSequence() {
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

// Test the image loading sequence
loadImageSequence();
