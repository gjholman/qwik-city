import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center">
      <h1>Hi there</h1>
      <a href="/about">Navigate to about</a>
      <a href="/layout">Navigate to new layout</a>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik City Stuff",
  meta: [
    {
      name: "description",
      content: "where does this actually go?",
    },
  ],
};
