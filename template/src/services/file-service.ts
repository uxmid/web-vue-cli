/*!
 * @Author: Evan <skcy@vip.qq.com>
 * @Date: 2018-08-22 11:05:43
 * @version: 1.0.0
 * Copyright (C) 2018-2018 O&M Cloud Inc. All rights reserved. 
 */

import flagwind from "flagwind-core";
import injectable = flagwind.injectable;
import ServiceBase from "./service-base";
import IHttpResponse from "src/common/http/http-response";

@injectable()
export default class FileService extends ServiceBase
{
    /**
     * 上传图片。
     * @param {any} model
     * @returns Promise
     */
    public async uploadAvatar(id: number, file: any): Promise<IHttpResponse>
    {
        // 请求接口
        let records = await this.apis.uploadImage
        ({
            serializeType: "form-data",
            data:
            {
                bizId: id,
            },
            files:
            {
                "file": file
            }
        });

        return records;
    }
}
