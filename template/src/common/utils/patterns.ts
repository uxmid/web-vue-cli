/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Copyright (C) 2010-present Flagwind Inc. All rights reserved. 
 */

export default
{
    // 邮箱
    email: /^([A-Za-z0-9]([-_\.]?[A-Za-z0-9]+)*@([A-Za-z0-9]+([-_]?[A-Za-z0-9]+)*)(\.[A-Za-z0-9]+([-_]?[A-Za-z0-9]+)*)*\.[A-Za-z]+)$/,

    // 手机
    mobile: /^((\+|00)86\s*[-\.]?)?\s*(1\d{2})((\s*)|(-?))(\d{4})((\s*)|(-?))(\d{4})$/,

    // 身份证
    "identity": /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
    
    // 座机
    telephone: /^(0\d{2,4})?((\s*)|(-?))(\d{4})((\s*)|(-?))(\d{3,4})$/,

    // 座机和手机
    // "telephoneAndMobile": /^((0\d{2,3}(-?)\d{7,8})|(1[35874]\d{9}))$/,
    // 依据tapd,id:1000681	添加199 198 166支持。
    telephoneAndMobile: /^((\(?0\d{2,3}(-?)\)?\d{7,8})|(\(?(\+|00)86[-\.]?\)?)?(1[3587469]\d{9}))$/m,
    //    "telephoneAndMobile": /^((\(?0\d{2,3}(-?)\)?\d{7,8})|((\+|00)86\s*[-\.]?)?(1[35874]\d{9}))$/,

    // 数字
    number: /^\d*$/,

    // 非零整数
    integer: /^-?[1-9]{1}\d*$/,

    // 中文
    chinese: /[\u4e00-\u9fa5]+/,

    // 非中文
    character: /^[^\u4e00-\u9fa5]/,

    // 整数或0
    "integer.zero": /^((-?[1-9]{1}\d*)|([0]{1}))$/,

    // 正整数
    "positive.integer": /^[1-9]{1}\d*$/,

    // 正整数或0
    "positive.integer.zero": /^(([1-9]{1}\d*)|([0]{1}))$/,

    // 正整数，一位小数点
    "positive.integer.one.point": /^(([1-9][0-9]*)|([0]\.\d{1}|[1-9][0-9]*\.\d{1}))$/,

    // 正整数或0，一位小数点
    "positive.integer.zero.one.point": /^(([0]{1})|([1-9][0-9]*)|([0]\.\d{1}|[1-9][0-9]*\.\d{1}))$/,

    // 正整数，两位小数点
    "positive.integer.two.point": /^(([1-9][0-9]*)|([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2}))$/,

    // 正整数或0，两位小数点
    "positive.integer.zero.two.point": /^(([0]{1})|([1-9][0-9]*)|([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2}))$/
};
