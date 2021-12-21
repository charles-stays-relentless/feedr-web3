const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Timeline", function () {
  it("Increments the tweets", async function () {
    const Timeline = await ethers.getContractFactory("Timeline");
    const timeline = await Timeline.deploy();
    await timeline.deployed();

    expect(await timeline.getTotalTweets()).to.equal(0);
    const sendTweetTx = await timeline.tweet();

    // wait until the transaction is mined
    await sendTweetTx.wait();

    expect(await timeline.getTotalTweets()).to.equal(1);
  });
});
