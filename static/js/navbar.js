export function useToggle() {
  let isVisible = false


  function show() {
    isVisible = true;
  }

  function hide() {
    isVisible = false;
  }

  function toggle() {
    isVisible === true ? hide() : show()
  }

  return {
    isVisible,
    show,
    hide,
    toggle,
  }
}
