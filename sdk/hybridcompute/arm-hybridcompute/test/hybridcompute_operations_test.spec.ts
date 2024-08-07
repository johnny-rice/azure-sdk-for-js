/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { HybridComputeManagementClient } from "../src/hybridComputeManagementClient";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("HybridCompute test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: HybridComputeManagementClient;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new HybridComputeManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus2euap";
    resourceGroup = "myjstest";
    resourcename = "resourcetest";

  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("operation list test", async function () {
    const resArray = new Array();
    for await (let item of client.operations.list()) {
      resArray.push(item);
    }
    assert.notEqual(resArray.length, 0);
  });

  it("gateways create test", async function () {
    const res = await client.gateways.beginCreateOrUpdateAndWait(
      resourceGroup,
      resourcename,
      {
        allowedFeatures: ["*"],
        gatewayType: "Public",
        location
      },
      testPollingOptions);
    assert.equal(res.name, resourcename);
  });

  it("gateways get test", async function () {
    const res = await client.gateways.get(
      resourceGroup,
      resourcename
    );
    assert.equal(res.name, resourcename);
  });

  it("gateways list test", async function () {
    const resArray = new Array();
    for await (let item of client.gateways.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("gateways delete test", async function () {
    const resArray = new Array();
    const res = await client.gateways.beginDeleteAndWait(resourceGroup, resourcename
    )
    for await (let item of client.gateways.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
