export const dateToString = (dateArg) =>
    dateArg
        .toLocaleString("en-us", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
        .replace(/(\d+)\/(\d+)\/(\d+)/, "$3-$1-$2");