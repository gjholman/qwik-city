import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      {/* This is where header and footer go in the future */}

      <main>
        <header>We got a new header people</header>
        <Slot />
        <footer>Look alive</footer>
      </main>
    </>
  );
});
