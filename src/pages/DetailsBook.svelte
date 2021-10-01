<script lang="ts">
  import { Spinner, BookInfo } from "/@components";
  import type { Readable } from "svelte/store";
  import type { BookItem } from "/@repositories/book";
  import RepositoryFactory, { BOOK } from "/@repositories/RepositoryFactory";
  import { find, books } from "/@store";
  const BookRepository = RepositoryFactory[BOOK];

  export let id: string;
  let book: Readable<BookItem>;
  let promise: Promise<void>;

  const findById = async (id: string) => {
    const book = await BookRepository.find(id);
    books.add([book]);
  };

  book = find(id);
  if (!$book) {
    promise = findById(id);
  }
</script>

<div>
  {#await promise}
    <div class="flex justify-center">
      <Spinner />
    </div>
  {:then}
    <BookInfo book={$book} />
  {:catch e}
    <span class="text-red-600 text-sm">
      {e.message}
    </span>
  {/await}
</div>
