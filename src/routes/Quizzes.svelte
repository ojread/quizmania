<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
</script>

<h1>Quizzes</h1>

<!-- <User let:user> -->

  <!-- <p>Howdy, {user.uid}</p> -->

  <Collection path={'quizzes'} let:data={quizzes}>
    {#each quizzes as quiz}
      <p>{quiz.title}</p>
    {/each}
  </Collection>

<!-- </User> -->