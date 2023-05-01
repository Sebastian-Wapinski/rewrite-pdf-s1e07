const search = window.location.search

const searchParams = new URLSearchParams(search);

for (const [key, value] of searchParams) {
    console.log((key, '=>', value));
}