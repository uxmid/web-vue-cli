/*!
 * Authors:
 *      Evan
 * 
 * Copyright (C) 2018-present O&M Cloud Inc. All rights reserved. 
 */

import { globalConfig } from "config/index";

const apiUrl = globalConfig.platformServer;

export default
{
    login: `${apiUrl}/oauth/token`,                                        // 登录
    uploadImage: `${apiUrl}/oauth/token`,                                  // 上传头像
};
