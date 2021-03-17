import { del, get, put } from '../db/service';

const EXPLORER = 'setting/explorer';
const ITEMS_PER_PAGE = 'setting/items-per-page';

export async function getExplorer() {
  const explorer = await get(EXPLORER);
  return explorer;
}

export async function setExplorer(explorer) {
  return await put(EXPLORER, explorer);
}

export async function getItemsPerPage() {
  const itemsPerPage = await get(ITEMS_PER_PAGE);
  return itemsPerPage;
}

export async function setItemsPerPage(itemsPerPage) {
  return await put(ITEMS_PER_PAGE, itemsPerPage);
}

const sName = 'Setting';
const methods = {
  getExplorer,
  setExplorer,
  getItemsPerPage,
  setItemsPerPage,
};

export async function start(server) {
  server.withService(sName, methods);
}
