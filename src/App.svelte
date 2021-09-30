<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Tailwind from "./Tailwind.svelte";
  import { Header } from "./components";
  import { Home, SearchBooks } from "./pages";
</script>

<Tailwind />
<Router>
  <Header />
  <main class="text-center py-8 m-16">
    <Route path="" component={Home} />
    <Route path="search-books" component={SearchBooks} />
  </main>
</Router>
