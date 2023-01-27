export const formatRupiah = (money) => {
  return new Intl.NumberFormat('id-ID',
    { currency: 'IDR', minimumFractionDigits: 0 }
  ).format(money);
}