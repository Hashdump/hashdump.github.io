import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const darkMode = writable(browser && JSON.parse(localStorage.getItem("darkMode")) || false);

darkMode.subscribe(($darkMode) => {

  if (!browser) return;

  setTimeout(() => {
    
    localStorage.setItem("darkMode", JSON.stringify($darkMode));

    document.body.classList.remove("darkMode");

    if ($darkMode) document.body.classList.add("darkMode");
  });
});
