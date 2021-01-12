export function chunkedArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}

export function countPagination(count: number) {
  return Array.from(Array(count).keys());
}

export function unchanckedArray<T>(array: T[][]): T[] {
  let arr: T[] = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      arr = [...arr, array[i][j]];
    }
  }

  return arr;
}
