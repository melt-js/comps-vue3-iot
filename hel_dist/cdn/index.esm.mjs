import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/appGroupName
|
|--------------------------------------------------------------------------
*/
const LIB_NAME = 'comps-vue3-iot';

/**
 * 将提供给用户的 lib 暴露出去（同时也暴露了类型）
 */
const dtlib = exposeLib(LIB_NAME);
const IotDeviceStatus = dtlib.IotDeviceStatus;
const IotGauge = dtlib.IotGauge;
const IotMetricCard = dtlib.IotMetricCard;
const App = dtlib.App;

export { App, IotDeviceStatus, IotGauge, IotMetricCard, dtlib as default, dtlib };
