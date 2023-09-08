/**
 * @interface 接口基础返回值
 */
interface IBaseResponse<T> {
	/**
	 * @param data 范型返回值
	 */
	data: T

	/**
	 * @param status 状态码
	 */
	status: Number

	/**
	 * @param message 消息提醒
	 */
	message: String
}

export default IBaseResponse
