<script>
  import NavBar from "./components/NavBar.svelte";
  import TailwindStyles from "./components/TailwindStyles.svelte";

  export let name;
</script>

<style>
  .test {
    @apply bg-orange-500;
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<NavBar />

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <p class="bg-green-500">Testing 123</p>
  <p class="test">Testing again</p>
</main>
