const phanTrang = (dataPhim, soLuongPhimTrong1Trang) => {
  let soTrang = Math.ceil(dataPhim.length / soLuongPhimTrong1Trang);
  let mangMoi = [];

  for (let n = 0; n < soTrang; n++) {
    mangMoi[n] = dataPhim.filter((item, index) => {
      if (index < soLuongPhimTrong1Trang) {
        return item;
      } else {
        return;
      }
    });
    if (dataPhim.length > soLuongPhimTrong1Trang) {
      dataPhim.splice(0, soLuongPhimTrong1Trang);
    }
  }
  return mangMoi;
};
export default phanTrang;
