var USIcoin = artifacts.require("./USIcoin.sol");

module.exports = function(deployer) {
  deployer.deploy(USIcoin, 20000000000, "USIcoin" , "UC", 18, 1, "0x627306090abaB3A6e1400e9345bC60c78a8BEf57");
};
