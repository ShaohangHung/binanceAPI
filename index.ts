const dotenv = require("dotenv");
// 這要放在最前面，其他的 module 才吃得到 env
dotenv.config();
import * as WalletService from "./services/WalletService";

const run = async () => {
  console.log(`============ Start running ============`);

  // await WalletService.dailyAccountSnapshot();
  

  console.log(`============ Finished ============`);
  process.exit();
};

run();
