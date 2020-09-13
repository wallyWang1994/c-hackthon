import { Merchant } from '../../dining-mobile/model/merchant.model';
import { OrderDetail } from '../../dining-mobile/model/order-detail.model';
import { Order } from '../../dining-mobile/model/order.model';

export const MerchantList: Merchant[] = [
    {
        merchantId: "001",
        img: "https://aspiredigital.cn/sos/uploadFiles/uploadImgs/20190916/b39ca5db63e147848a2b630dd1025226.jpg",
        name: "无锡希尔顿逸林酒店自助餐厅",
        location: "无锡市新吴区高思路10号",
        city: "无锡",
        cityCode: "00100"
    }

    ,
    {
        merchantId: "002",
        img: "https://aspiredigital.cn/sos/uploadFiles/uploadImgs/20190916/b39ca5db63e147848a2b630dd1025226.jpg",
        name: "沈阳希尔顿逸林酒店自助餐厅",
        location: "风雨街89号",
        city: "沈阳",
        cityCode: "00200"
    },
    {
        merchantId: "003",
        img: "https://aspiredigital.cn/sos/uploadFiles/uploadImgs/20190916/b39ca5db63e147848a2b630dd1025226.jpg",
        name: "无锡希尔顿逸林酒店自助餐厅",
        location: "无锡市新吴区高思路10号",
        city: "无锡",
        cityCode: "00100"
    },
    {
        merchantId: "004",
        img: "https://aspiredigital.cn/sos/uploadFiles/uploadImgs/20190916/b39ca5db63e147848a2b630dd1025226.jpg",
        name: "沈阳希尔顿逸林酒店自助餐厅",
        location: "风雨街89号",
        city: "沈阳",
        cityCode: "00200"
    }
]


export const MockOrderDetail: OrderDetail = {
    orderId: "0001",
    merchantId: "00234",
    merchantImg: "https://aspiredigital.cn/sos/uploadFiles/uploadImgs/20190916/b39ca5db63e147848a2b630dd1025226.jpg",
    merchantName: "无锡希尔顿逸林酒店自助餐厅",
    merchantAddress: "无锡市新吴区高思路10号",
    bookDate: "2019-10-20",
    bookType: "午餐",
    treatNum: 3,
    couponNo: "326758888"
}


export const OrderList: Order[] = [

    {
        "userId": "1234",
        "customerName": "haylee",
        "mobile": "1234",
        "bookingDate": "2019-10-24",
        "dinningTime": "18:00",
        "personCount": 0,
        "memo": "",
        "privilegeId": 0,
        "discount": "",
        "privilegeStatus": 0,
        "privilegeMaxTreatNum": 0,
        "commercialId": "00999",
        "commercialImg": "https://aspiredigital.cn/sos/uploadFiles/uploadImgs/20190916/b39ca5db63e147848a2b630dd1025226.jpg",
        "commercialName": "无锡希尔顿逸林酒店自助餐厅",
        "commercialAddress": "无锡市新吴区高思路10号",
        "source": ""
    }, {
        "userId": "1234",
        "customerName": "haylee",
        "mobile": "1234",
        "bookingDate": "2019-10-24",
        "dinningTime": "18:00",
        "personCount": 0,
        "memo": "",
        "privilegeId": 0,
        "discount": "",
        "privilegeStatus": 0,
        "privilegeMaxTreatNum": 0,
        "commercialId": "00999",
        "commercialImg": "https://aspiredigital.cn/sos/uploadFiles/uploadImgs/20190916/b39ca5db63e147848a2b630dd1025226.jpg",
        "commercialName": "无锡希尔顿逸林酒店自助餐厅",
        "commercialAddress": "无锡市新吴区高思路10号",
        "source": ""
    },
    {
        "userId": "1234",
        "customerName": "haylee",
        "mobile": "1234",
        "bookingDate": "2019-10-24",
        "dinningTime": "18:00",
        "personCount": 0,
        "memo": "",
        "privilegeId": 0,
        "discount": "",
        "privilegeStatus": 0,
        "privilegeMaxTreatNum": 0,
        "commercialId": "00999",
        "commercialImg": "https://aspiredigital.cn/sos/uploadFiles/uploadImgs/20190916/b39ca5db63e147848a2b630dd1025226.jpg",
        "commercialName": "无锡希尔顿逸林酒店自助餐厅",
        "commercialAddress": "无锡市新吴区高思路10号",
        "source": ""
    },
    {
        "userId": "1234",
        "customerName": "haylee",
        "mobile": "1234",
        "bookingDate": "2019-10-24",
        "dinningTime": "18:00",
        "personCount": 0,
        "memo": "",
        "privilegeId": 0,
        "discount": "",
        "privilegeStatus": 0,
        "privilegeMaxTreatNum": 0,
        "commercialId": "00999",
        "commercialImg": "https://aspiredigital.cn/sos/uploadFiles/uploadImgs/20190916/b39ca5db63e147848a2b630dd1025226.jpg",
        "commercialName": "无锡希尔顿逸林酒店自助餐厅",
        "commercialAddress": "无锡市新吴区高思路10号",
        "source": ""
    }

]