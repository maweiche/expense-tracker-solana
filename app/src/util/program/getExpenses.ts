import * as anchor from '@project-serum/anchor'
import { anchorProgram } from '@/util/anchorProgram';
import { v4 } from 'uuid';

export const getExpenses = async (
  wallet: anchor.Wallet,
) => {
  const program = anchorProgram(wallet);


  // @ts-ignore
  const expenses = await program.account.expenseAccount.all()
  const output = expenses.map((expense: any) => {
    return {
      merchant: expense.account.mname,
      amount: expense.account.amount.toNumber(),
      pubKey: expense.publicKey.toBase58(),
    };
  });
  return output
}