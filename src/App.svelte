<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import Router, { link } from 'svelte-spa-router'

  import firebase from "./firebase.js";
  import NavBar from "./components/NavBar.svelte";
  import TailwindStyles from "./components/TailwindStyles.svelte";

  import Home from "./routes/Home.svelte";
  import Quizzes from "./routes/Quizzes.svelte";

  let routes = {
    "/": Home,
    "/quizzes": Quizzes,
  };
</script>

<style>

</style>

<FirebaseApp {firebase}>

  <NavBar />

  <a href="/" use:link>Home</a>
  <a href="/quizzes" use:link>Quizzes</a>

  <Router {routes} />

</FirebaseApp>