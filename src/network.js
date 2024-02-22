import axios from "axios";

export const baseUrl = "https://ecommerce.routemisr.com/"

export function postResource (path,data,onSuccess,onFail){

    let requestData = {
		method: "post",
		url: baseUrl + path,
		data,
	};

    axios(requestData).then((res)=>{
        onSuccess(res.data)
    }).catch((fail) => {
        onFail(fail.response);
    });

}