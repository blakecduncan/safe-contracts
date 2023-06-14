import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deployer } = await getNamedAccounts();
    const { deploy } = deployments;

    await deploy("EntryPoint", {
        from: deployer,
        args: [],
        log: true,
        deterministicDeployment: true,
    });

    await deploy("EIP4337Manager", {
        from: deployer,
        args: ["0x24DcF7Fa50F0Ec9d8972Bf0aB1FF5361B796E6BF"],
        log: true,
        deterministicDeployment: true,
    });

    // await deploy("SafeAccountFactory", {
    //     from: deployer,
    //     args: [],
    //     log: true,
    //     deterministicDeployment: true,
    // });

    // await deploy("EIP4337Fallback", {
    //     from: deployer,
    //     args: [],
    //     log: true,
    //     deterministicDeployment: true,
    // });
};

deploy.tags = ["4337", "l2-suite", "main-suite"];
export default deploy;
