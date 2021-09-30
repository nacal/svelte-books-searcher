<script lang="ts">
  import { Link } from "svelte-routing";
  import SearchBar from "/@components/SearchBar.svelte";

  let q = "";
</script>

<h1>Search Books</h1>
<form>
  <SearchBar bind:value={q} />
</form>
<Link to="/">Home</Link>

<div class="text-center mt-4">
  {q}
</div>
