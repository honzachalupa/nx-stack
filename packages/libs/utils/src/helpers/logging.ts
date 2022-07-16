import {
    ILogProps,
    initializeLogger,
    TLogEntryLevels,
} from "@honzachalupa/utils";
// @ts-ignore
import packageJson from "../../../../../package.json";

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
        token: process.env["NX_LOGTAIL_TOKEN"],
    },
    levelsMap,
    appVersion: packageJson.version,
});

export const log = (props: ILogProps & { code: TLogEntryCodes }) => {
    logger.log(props);
};
