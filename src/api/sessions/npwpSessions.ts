import { Config, Settings } from "../config";
import { logInfo } from "../../util/logger";
import { visionFetch } from "../../util/visionFetch";

import { isDefined, isString, isValidURL } from "../../util/validator";

type NPWPSessionsCreateParam = {
  success_url: string;
  cancel_url?: string;
};

type NPWPSessionsRetrieveParam = {
  sid: string;
};

export class NPWPSessions {
  private static readonly BASE_URL = "ocr/:version/npwp-sessions";

  constructor(private readonly config: Config) {}

  async create(param: NPWPSessionsCreateParam, newConfig?: Partial<Settings>) {
    logInfo("NPWP Sessions - Create", { param });

    const validationResult = this.validateCreateParam(param);
    if (validationResult.length) {
      throw new Error(validationResult[0]);
    }

    const { success_url, cancel_url } = param;

    const req: RequestInit = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ success_url, cancel_url }),
    };

    const config = this.config.getConfig(newConfig);
    return visionFetch(config, NPWPSessions.BASE_URL, req);
  }

  async retrieve(
    param: NPWPSessionsRetrieveParam,
    newConfig?: Partial<Settings>
  ) {
    logInfo("NPWP Sessions - Retrieve", { param });

    const validationResult = this.validateRetrieveParam(param);
    if (validationResult.length) {
      throw new Error(validationResult[0]);
    }

    const { sid } = param;

    const req = {
      method: "GET",
    };

    const config = this.config.getConfig(newConfig);
    return visionFetch(config, `${NPWPSessions.BASE_URL}/${sid}`, req);
  }

  private validateCreateParam(param: NPWPSessionsCreateParam): string[] {
    const createParamValidation = {
      success_url: (val: any) => {
        if (!isDefined(val)) {
          return "Success URL is required";
        }

        if (!isValidURL(val)) {
          return "Success URL must be a valid URL";
        }

        return "";
      },
      cancel_url: (val: any) => {
        if (!isDefined(val) || isValidURL(val)) {
          return "";
        }

        return "Cancel URL must be a valid URL";
      },
    };

    const result = [];

    for (const [key, validator] of Object.entries(createParamValidation)) {
      const val = param[key as keyof NPWPSessionsCreateParam];

      result.push(validator(val));
    }

    return result.filter(Boolean);
  }

  private validateRetrieveParam(param: NPWPSessionsRetrieveParam): string[] {
    const retrieveParamValidation = {
      sid: (val: any) => {
        if (!isDefined(val)) {
          return "Session ID is required";
        }

        if (!isString(val)) {
          return "Sessions ID must be a string";
        }

        return "";
      },
    };

    const result = [];

    for (const [key, validator] of Object.entries(retrieveParamValidation)) {
      const val = param[key as keyof NPWPSessionsRetrieveParam];

      result.push(validator(val));
    }

    return result.filter(Boolean);
  }
}
