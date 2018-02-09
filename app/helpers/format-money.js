import { helper } from '@ember/component/helper';

export function formatMoney(amount) {
  if (amount) return '$' + parseFloat(amount).toFixed(2);
  
}

export default helper(formatMoney);
