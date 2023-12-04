/** uncomment one of these **/
import OpenAI from "openai"
// import { HfInference, textGeneration } from '@huggingface/inference'

/**
 * 🎄 Challenge:
 * 1. When clicked, the doors should open
 *    to reveal a festive joke.
 * 
 * 🎁 hint.md for help!
**/

document.getElementById('window-container').addEventListener('click', function () {
  async function getJoke() {
    const openai = new OpenAI({ 
      apiKey: process.env.OPENAI_API_KEY,
      dangerouslyAllowBrowser: true 
    });

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "Tell me a Christmas-themed dad joke."
        }
      ],
      model: "gpt-3.5-turbo-1106"
    });

    // const hf = new HfInference(process.env.HF_API_KEY);
    // const textToGenerate = "Tell me a Christmas-themed dad joke.";

    // const completion = await hf.textGeneration({
    //     inputs: textToGenerate,
    //     model: "HuggingFaceH4/zephyr-7b-beta"
    // });

    const leftDoor = document.querySelector('.left-door');
    const rightDoor = document.querySelector('.right-door');
    const jokeDisplay = document.querySelector('.joke-display');
    const jokeText = document.getElementById("joke-display");
  
    leftDoor.style.animation = "left-open 0.3s forwards";
    rightDoor.style.animation = "right-open 0.3s forwards";
    jokeDisplay.style.animation = "display-joke 0.3s forwards";
    jokeText.innerHTML = completion.choices[0].message.content;
  }

  getJoke();
});
