
function searchQuery(word, list) {
    let results = [];

    let query = word.trim();

    for (let i = 0; i < list.length; i++) {
        const el = list[i];


        if (el.name.toLowerCase().includes(query) && query) {
            results.push(el);
        }
    }

    return results;
}

export { searchQuery };
