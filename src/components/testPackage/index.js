// 导入组件，组件必须声明 name
import testPackage from "./testPackage";

// 为组件提供 install 安装方法，供按需引入
testPackage.install = function (Vue) {
    Vue.component(testPackage.name, testPackage);
}

// 默认导出组件
export default testPackage;