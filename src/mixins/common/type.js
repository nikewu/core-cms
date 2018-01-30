export default {
    judgeType(arg) {
        // 判断返回js数据类型
        return Object.prototype.toString.call(arg).slice(8, -1);
    }
};