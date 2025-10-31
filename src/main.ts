// CMPM 121 Smelly Code Activity

// Define IDs
const IDs = {
  increment: "increment",
  decrement: "decrement",
  reset: "reset",
  counter: "counter",
} as const;

// Define interfaces
interface AppState {
  count: number;
}
const state: AppState = { count: 0 };

interface UIElements {
  incrementBtn: HTMLElement;
  decrementBtn: HTMLElement;
  resetBtn: HTMLElement;
  counterDisplay: HTMLElement;
}

// Function to update text and titles
function render(state: AppState, ui: UIElements) {
  ui.counterDisplay.textContent = `${state.count}`;
  document.title = `Clicked ${state.count}`;
  document.body.style.backgroundColor = state.count % 2 ? "pink" : "lightblue";
}

// Set up project
function setup() {
  // Set up HTML
  document.body.innerHTML = `
    <h1>CMPM 121 Project</h1>
    <p>Counter: <span id="${IDs.counter}">0</span></p>
    <button id="${IDs.increment}">Click Me!</button>
    <button id="${IDs.decrement}">Decrement</button>
    <button id="${IDs.reset}">Reset</button>
  `;

  // Get UI elements in a single const
  const ui: UIElements = {
    incrementBtn: document.getElementById(IDs.increment)!,
    decrementBtn: document.getElementById(IDs.decrement)!,
    resetBtn: document.getElementById(IDs.reset)!,
    counterDisplay: document.getElementById(IDs.counter)!,
  };

  // Check if any element is missing, then exit the function
  if (
    !ui.incrementBtn || !ui.decrementBtn || !ui.resetBtn || !ui.counterDisplay
  ) return;

  // Increment button event
  ui.incrementBtn.addEventListener("click", () => {
    // Increase counter and update displays
    state.count++;
    render(state, ui);
  });

  // Decrement button event
  ui.decrementBtn.addEventListener("click", () => {
    // Decrease counter and update displays
    state.count--;
    render(state, ui);
  });

  // Reset button event
  ui.resetBtn.addEventListener("click", () => {
    // Decrease counter to 0 and update displays
    state.count = 0;
    render(state, ui);
  });
}

// Initial setup call
setup();
