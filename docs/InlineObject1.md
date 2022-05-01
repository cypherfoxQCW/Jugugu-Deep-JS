# Jugugufast.InlineObject1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **String** |  | 
**account** | **String** | 通过接入jugugu申请 | 
**secret** | **String** | 通过接入jugugu申请 | 
**time** | **Number** | int64类型 | 
**randomtoken** | **String** | 可以由sha256函数随机产生，避免2分钟内重复，可用时间+其他唯一参数作为种子，防止重放攻击 | 
**paymentpassword** | **String** | 可以自由设置也可以传“”空字符串，系统随机生成，建议让系统随机生成 | [optional] 
**openid** | **String** | 项目方账户系统的唯一识别码，用于绑定登录jugugu系统 | 


