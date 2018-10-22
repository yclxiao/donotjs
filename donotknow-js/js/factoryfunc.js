// { userName = "aaa", avatar = "bbb" } = {}, { userName = "aaa", avatar = "bbb" }是参数正确的默认值，是参数不正确或者为undefine时的默认值
/**
 * 这种返回对象的函数可以认为是工厂函数
 * @param {参数} param0
 */
const createUser = ({ userName = "aaa", avatar = "bbb" } = {}) => ({
  userName,
  avatar,
  setUserName(userName) {
    this.userName = userName;
    return this;
  }
});

console.log(
  createUser({
    userName: "echo",
    avatar: "echo.png"
  })
);

console.log(createUser());
var user;
console.log(createUser(user));
