<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";

  import firebase from "./firebase.js";
  import NavBar from "./components/NavBar.svelte";
  import TailwindStyles from "./components/TailwindStyles.svelte";
</script>

<style>
  
</style>

<FirebaseApp {firebase}>

  <User let:user>

    <p>Howdy, {user.uid}</p>

    <!-- 4. 💬 Get all the comments in its subcollection -->
    <Collection path={'quizzes'} let:data={quizzes}>
      {#each quizzes as quiz}
        <p>{quiz.title}</p>
      {/each}
    </Collection>

  </User>

</FirebaseApp>

<NavBar />