import {
    ILogProps,
    initializeLogger,
    TLogEntryLevels,
} from "@honzachalupa/utils";
import { config } from "../";
// @ts-ignore
import packageJson from "../../../../../package.json";
import { isDev } from "./app";

type TLogEntryCodes =
    | "INFO"
    | "FUNCTION_TRIGGERED"
    | "FUNCTION_STARTED"
    | "FUNCTION_FINISHED"
    | "EXCEPTION"
    | "SECURITY_BREACH"
    | "DEBUGGING";

const levelsMap: {
    [key in TLogEntryLevels]: TLogEntryCodes[];
} = {
    info: ["INFO", "DEBUGGING"],
    warn: [],
    error: [],
};

const logger = initializeLogger({
    logtail: {
        token: isDev ? config.logtailTokenDev : config.logtailTokenProd,
    },
    levelsMap,
    appVersion: packageJson.version,
});

export const log = (props: ILogProps & { code: TLogEntryCodes }) => {
    logger.log(props);
};
