/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Copyright (C) 2018-present O&M Cloud Inc. All rights reserved. 
 */

import Global from "./global";
import User from "./user";

const modules =
{
    global: new Global(),
    user: new User()
};

export default modules;
