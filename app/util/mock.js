/**
 Created by liuximing on 2017/11/2.
 ╭︿︿︿╮
 {/ o o /}
 ( (oo) )
 ︶︶︶
 **/
import Mock from 'mockjs';
export default Mock.mock('http://mockjs',{
	'name'    : '@name',
	'age|1-100': 100,
	'color'    : '@color'
})
