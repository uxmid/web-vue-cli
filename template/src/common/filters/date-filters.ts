/*!
 * @Author: Evan <skcy@vip.qq.com>
 * @Date:  2019-06-20 11:57:42
 * @version: 1.0.0
 * Copyright (C) 2018-2019 O&M Cloud Inc. All rights reserved. 
 */

import { formatDate, formatDateTime } from "common/utils/extends";

export function dateFilter(value: string | Date)
{
    return formatDate(value) || "-";
}

export function dateTimeFilter(value: string | Date)
{
    return formatDateTime(value) || "-";
}
