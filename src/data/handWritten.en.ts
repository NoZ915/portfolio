export const handWritten = {
  sections: {
    technologies: "Technologies Used",
    introduction: "Project Introduction",
    links: "Project Links",
    features: "Key Features",
    others: "Additional Notes",
  },
  content: {
    intro1:
      '"Handwritten Digit Recognition System" is a midterm project I completed for the "Machine Learning" course in the second semester of 2023. Based on the concept of a Multilayer Perceptron (MLP), the neural network was implemented using vanilla JavaScript (without any AI frameworks). The frontend was built with HTML, CSS, and JavaScript for visualization, and p5.js was used to create a canvas where users can draw digits. The system captures and processes the drawn input using p5.js tools, segments the image into suitable input format, and feeds it into a custom-built neural network model that predicts the result as an array of 10 numbers, each representing the confidence score for digits 0–9.',
    intro2:
      "To implement the MLP without relying on any AI frameworks, I studied multiple papers and resources on MLPs. This helped me understand key concepts such as feedforward and backpropagation, as well as essential mathematical tools like the chain rule in calculus, partial derivatives, the sigmoid function, and matrix transposition.",
    linkSite:
      "Live Website (no backend included, please wait about 1.5 minutes upon startup for the MNIST file to load and train the model for better accuracy)",
    linkSource: "Source Code",
    features: [
      "Canvas for users to write digits; supports both desktop and mobile",
      "Real-time digit prediction after drawing",
      "Buttons on the canvas for clearing input",
      "Prediction results visualized on the right side",
    ],
    finalVideo: "Demo Video",
    report: "Written Report",
  },
};
