import { wrapJavaPerform } from "./lib/libjava";
import { colors as c } from "../lib/color";

export namespace monitor {
  export const watchLogs = () => {
    wrapJavaPerform(() => {
      // Note that we hook Log.println() as some libraries will use this for custom logging,
      // that way the behaviour is the same as `adb logcat`
      const androidLog = Java.use("android.util.Log")
      androidLog["println"].overload("int", "java.lang.String", "java.lang.String").implementation = function (level: number, tag: string, message: string) {
        const logLevels = {
          7: 'LOG_ASSERT',
          3: 'LOG_DEBUG',
          6: 'LOG_ERROR',
          4: 'LOG_INFO',
          2: 'LOG_VERBOSE',
          5: 'LOG_WARN',
        }

        // A switch case statement to use the correct colour
        switch (logLevels[level]) {
          case 'LOG_ASSERT': {
            send(`${c.yellowBright("LOG_ASSERT")} [${tag}]: ${message}`);
            break;
          }
          case 'LOG_DEBUG': {
            send(`${c.greenBright("LOG_DEBUG")} [${tag}]: ${message}`);
            break;
          }
          case 'LOG_ERROR': {
            send(`${c.yellowBright("LOG_ERROR")} [${tag}]: ${message}`);
            break;
          }
          case 'LOG_INFO': {
            send(`${c.blueBright("LOG_INFO")} [${tag}]: ${message}`);
            break;
          }
          case 'LOG_VERBOSE': {
            send(`${c.blackBright("LOG_VERBOSE")} [${tag}]: ${message}`);
            break;
          }
          case 'LOG_WARN': {
            send(`${c.yellowBright("LOG_WARN")} [${tag}]: ${message}`);
            break;
          }
          default: {
            send(`${c.redBright("LOG_UNKNOWN_LEVEL")} [${tag}]: ${message}`);
            break;
          }
        }

        return this["println"](level, tag, message)
      }
    })

  }
  export const stringCanary = (can: string): Promise<void> => {
    return wrapJavaPerform(() => {

    });
  };
}
