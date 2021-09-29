<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Tailwind from "./Tailwind.svelte";
  import { Header } from "./components";
  import { Home, SearchBooks } from "./pages";
</script>

<Tailwind />
<Header />
<Router>
  <main class="text-center p-16 mx-0">
    <Route path="" component={Home} />
    <Route path="search-books" component={SearchBooks} />
  </main>
</Router>
