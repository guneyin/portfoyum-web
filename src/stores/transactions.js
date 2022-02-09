import { localStore } from "@stores/localStore";
import { get } from 'svelte/store';
import * as api from '@api';

export const transactions = localStore('transactions', []);

export const postTransactions = async (file) => {
  const data = await api.transactions.uploadFile(file);

  transactions.set(data)
};

export const saveTransactions = async () => {
  let data = get(transactions);

  const req = await api.transactions.save(data);

  return req.status == 200;
};

export const flushTransactions = () => {
  transactions.set([]);
}
