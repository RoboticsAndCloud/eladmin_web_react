import {getUrlConfig} from "../config/url";
import httpRequest from "./http";
import {ProfileInfoType} from "../store/types/profileType";

const profileUrl = {
    profileInfo: "/admin/profile/info",
    profileUpdate: "/admin/profile/update",
    profileRepass: "/admin/profile/repass",
}

/**
 * Profile 个人中心服务
 */
class Profile {

    /**
     * getProfileInfo 获取个人信息
     */
    getProfileInfo(): Promise<any> {
        let profileInfoUrl = getUrlConfig().proxyUrl + profileUrl.profileInfo
        let info = httpRequest.get<any>(profileInfoUrl, {})
        return info
    }

    // getProfileInfo(): Promise<ProfileInfoType> {
    //     let profileInfoUrl = getUrlConfig().proxyUrl + profileUrl.profileInfo
    //     // console.log("xxxxx", profileInfoUrl)
    //     // fetch("http://127.0.0.1:3004/profile")
    //     let info = httpRequest.get<ProfileInfoType>(profileInfoUrl, {})
    //     return info
    // }

    /**
     * profileUpdate 个人信息更新
     */
    profileUpdate(profileInfo: {name: string, given_name: string, email: string, phone: string, mobile: string}): Promise<any> {
        let profileUpdateUrl = getUrlConfig().proxyUrl + profileUrl.profileUpdate
        return httpRequest.post<any>(profileUpdateUrl, {}, profileInfo)
    }

    /**
     * profileRepass 更新个人中心密码
     */
    profileRepass(passInfo: {old_pwd: string, new_pwd: string, confirm_pwd: string}): Promise<any> {
        let profileUpdateUrl = getUrlConfig().proxyUrl + profileUrl.profileRepass
        return httpRequest.post<any>(profileUpdateUrl, {}, passInfo)
    }
}

export const ProfileService = new Profile()