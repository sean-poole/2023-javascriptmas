/** uncomment one of these **/
import OpenAI from "openai"
// import { HfInference } from '@huggingface/inference'

/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal 
 *    should be hidden.
 * 2. Use the inputted text to generate an image 
 *    for the e-card using an AI model. 
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 * 
 * 🎁 hint.md for help!
**/

const dialogModal = document.getElementById('dialog-modal')
const imageContainer = document.getElementById('image-container')

/** show dialog on load **/
dialogModal.show()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const btn = document.querySelector(".btn-send");
btn.addEventListener("click", getImage, false);

async function getImage(e) {
  e.preventDefault();

  const userInput = document.getElementById("user-input").value;
  dialogModal.innerHTML = '<div class="loader"></div>';
  const generatedImage = await openai.images.generate({
    prompt: userInput,
    size: "512x512"
  });

  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = "";
  const newImage = document.createElement("img");
  newImage.src = generatedImage.data[0].url;
  imageContainer.append(newImage);

  dialogModal.close();
}
