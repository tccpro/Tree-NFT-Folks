import { ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";

const formatBigNumber = (number) => {
  return formatEther(number) * 10 ** 18;
};

export const setDigit = (value) => {
  return Number(
    Number(value).toLocaleString("en", {
      useGrouping: false,
      minimumFractionDigits: 0,
      maximumFractionDigits: Number(value) > 1 ? 2 : 8,
    })
  );
};

export default formatBigNumber;
