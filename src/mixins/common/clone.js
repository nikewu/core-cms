import { judgeType } from './type';
// 此js不应该存在 ！！！ 建议使用 immutable
export default {
    // 简单的数据深克隆
    // JSON不支持NaN，Infinity，甚至精确的浮点数，更别说循环引用和function等等
    deepClone1() {
        return JSON.parse(JSON.stringify(arguments[0]));
    },
    // 常规完善深克隆
    deepClone2(obj) {
        // 深克隆
        let result;
        // 确定result的类型
        if (judgeType(obj) === 'Object') {
            result = {};
        } else if (judgeType(obj) === 'Array') {
            result = [];
        } else {
            return obj;
        }
        for (const key in obj) {
            if ({}.hasOwnProperty.call(obj, key)) {
                var copy = obj[key];
                if (judgeType(copy) === 'Object' || 'Array') {
                    result[key] = this.deepClone2(copy);
                    // result[key] = arguments.callee(copy); 避免名称改变引发错误
                } else {
                    result[key] = obj[key];
                }
            }
        }
        return result;
    }
};