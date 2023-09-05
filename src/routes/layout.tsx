import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      {/* This is where header and footer go in the future */}

      <main>
        <header>Normal ass header</header>
        <Slot />
        <footer>Normal ass footer</footer>
      </main>
    </>
  );
});
