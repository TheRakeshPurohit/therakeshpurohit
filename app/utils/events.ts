export const disableKeyboardEvents = () => {
  if (typeof window !== "undefined") {
    document.addEventListener(
      "keydown",
      (event: KeyboardEvent) => {
        // Allow Up Arrow, Down Arrow, and Enter key
        if (
          event.key === "ArrowUp" ||
          event.key === "ArrowDown" ||
          event.key === "Enter"
        ) {
          return;
        }

        // Prevent all other keyboard events
        event.preventDefault();
        event.stopPropagation();
      },
      { passive: false }
    );
  }
};

export const disableMouseEvents = () => {
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", disableMouseEvent, {
      passive: false,
    });
    document.addEventListener("mousedown", disableMouseEvent, {
      passive: false,
    });
    document.addEventListener("mouseup", disableMouseEvent, { passive: false });
    document.addEventListener("click", disableMouseEvent, { passive: false });
    document.addEventListener("dblclick", disableMouseEvent, {
      passive: false,
    });
    document.addEventListener("contextmenu", disableMouseEvent, {
      passive: false,
    });
    document.addEventListener("wheel", disableMouseEvent, { passive: false });
    document.addEventListener("touchstart", disableMouseEvent, {
      passive: false,
    });
    document.addEventListener("touchmove", disableMouseEvent, {
      passive: false,
    });

    function disableMouseEvent(event: Event) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
};
