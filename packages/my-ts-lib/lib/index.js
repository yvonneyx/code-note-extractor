'use strict';

/**
 * <zh/> My ts lib
 * <en/> My ts lib
 * @packageDocumentation
 */
/**
 * <zh/> 两个数之和
 *
 * <en/> Sum of two numbers
 * @remarks
 * <zh/> 这是一个备注
 * <en/> This is a remark
 * @param a - <zh/> 第一个数 | <en/> the first num
 * @param b - <zh/> 第二个数 | <en/> the second num
 * @returns <zh/> 两个数之和 | <en/> sum of two numbers
 * @example
 * ```ts
 * import { add } from 'my-ts-lib';
 * const sum = add(1, 2); // 3
 * ```
 */
function add(a, b) {
    return a + b;
}
/**
 * <zh/> 测试类
 * <en/> Test Class
 */
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.test = function () { };
    return Test;
}());

exports.Test = Test;
exports.add = add;
