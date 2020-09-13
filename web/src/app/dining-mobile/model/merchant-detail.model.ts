export class MerchantDetail {
    merchantId: string;
    img: string;
    name: string;
    location: string;
    city: string;
    cityCode: string;
}

export const MockMerchantDetail: MerchantDetail = 
    {
        merchantId: "001",
        img: "https://aspiredigital.cn/sos/uploadFiles/uploadImgs/20190916/b39ca5db63e147848a2b630dd1025226.jpg",
        name: "无锡希尔顿逸林酒店自助餐厅",
        location: "无锡市新吴区高思路10号",
        city: "无锡",
        cityCode: "00100"
    }