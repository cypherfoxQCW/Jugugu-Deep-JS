# Jugugufast.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**juguguFastGetNFTPost**](DefaultApi.md#juguguFastGetNFTPost) | **POST** /Jugugu_FastGetNFT | 3.jugugu获取小红花POAP
[**juguguFastLoginPost**](DefaultApi.md#juguguFastLoginPost) | **POST** /Jugugu_FastLogin | 2.注册jugugu登录
[**juguguFastRegPost**](DefaultApi.md#juguguFastRegPost) | **POST** /Jugugu_FastReg | 1.注册jugugu
[**juguguFastSignTxPost**](DefaultApi.md#juguguFastSignTxPost) | **POST** /Jugugu_FastSignTx | 4.使用jugugu进行交易签名



## juguguFastGetNFTPost

> InlineResponse200 juguguFastGetNFTPost(opts)

3.jugugu获取小红花POAP

使用项目方自己账户体系的OpenID注册并绑定jugugu账号，项目方接入jugugu的Account和Secret以及用户登录后的登录令牌token，等参数请求进行小红花POAP领取。

### Example

```javascript
import Jugugufast from 'jugugufast';

let apiInstance = new Jugugufast.DefaultApi();
let opts = {
  'inlineObject': new Jugugufast.InlineObject() // InlineObject | 
};
apiInstance.juguguFastGetNFTPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## juguguFastLoginPost

> InlineResponse2001 juguguFastLoginPost(opts)

2.注册jugugu登录

使用项目方自己账户体系OpenID,用户手机号，项目方接入jugugu的Account和Secret登录用户jugugu账户，获得登录token  该token用于后续函数调用

### Example

```javascript
import Jugugufast from 'jugugufast';

let apiInstance = new Jugugufast.DefaultApi();
let opts = {
  'inlineObject3': new Jugugufast.InlineObject3() // InlineObject3 | 
};
apiInstance.juguguFastLoginPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## juguguFastRegPost

> InlineResponse2001 juguguFastRegPost(opts)

1.注册jugugu

使用项目方自己账户体系的OpenID注册并绑定jugugu账号，如果该手机已经注册jugugu则直接进行绑定OpenID。注册的用户返回短密钥，绑定的用户不返回短密钥，短密钥请务必加密存储，建议使用ECC256进行加密，加密解密密钥妥善保存，建议内存中存放

### Example

```javascript
import Jugugufast from 'jugugufast';

let apiInstance = new Jugugufast.DefaultApi();
let opts = {
  'inlineObject1': new Jugugufast.InlineObject1() // InlineObject1 | 
};
apiInstance.juguguFastRegPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## juguguFastSignTxPost

> Object juguguFastSignTxPost(opts)

4.使用jugugu进行交易签名

使用项目方自己账户体系的OpenID，项目方接入jugugu的Account和Secret以及用户登录后的登录令牌token，等参数请求进行交易签名,返回签名后的交易数据rowData。详情见示例代码

### Example

```javascript
import Jugugufast from 'jugugufast';

let apiInstance = new Jugugufast.DefaultApi();
let opts = {
  'inlineObject2': new Jugugufast.InlineObject2() // InlineObject2 | 
};
apiInstance.juguguFastSignTxPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

