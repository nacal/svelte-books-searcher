<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Tailwind from "./Tailwind.svelte";
  import { Header } from "./components";
  import { SearchBooks, DetailsBook } from "./pages";
</script>

<Tailwind />
<Router>
  <Header />
  <main class="text-center py-8 m-16">
    <Route path="" component={SearchBooks} />
    <Route path="books/:id" component={DetailsBook} />
  </main>
</Router>
