/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  MetricDefinitionsImpl,
  MetricsImpl,
  DiagnosticSettingsImpl,
  DiagnosticSettingsCategoryImpl,
  EventCategoriesImpl,
  OperationsImpl
} from "./operations/index.js";
import {
  MetricDefinitions,
  Metrics,
  DiagnosticSettings,
  DiagnosticSettingsCategory,
  EventCategories,
  Operations
} from "./operationsInterfaces/index.js";
import { MonitorClientOptionalParams } from "./models/index.js";

export class MonitorClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the MonitorClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: MonitorClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: MonitorClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-monitor-profile-2020-09-01-hybrid/2.1.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.metricDefinitions = new MetricDefinitionsImpl(this);
    this.metrics = new MetricsImpl(this);
    this.diagnosticSettings = new DiagnosticSettingsImpl(this);
    this.diagnosticSettingsCategory = new DiagnosticSettingsCategoryImpl(this);
    this.eventCategories = new EventCategoriesImpl(this);
    this.operations = new OperationsImpl(this);
  }

  metricDefinitions: MetricDefinitions;
  metrics: Metrics;
  diagnosticSettings: DiagnosticSettings;
  diagnosticSettingsCategory: DiagnosticSettingsCategory;
  eventCategories: EventCategories;
  operations: Operations;
}
