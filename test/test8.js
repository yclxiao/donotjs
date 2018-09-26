//每个闭包都有个自己的“背包”，“背包”里装着所有变量
function f1()
{
    var N = 0; // N是f1函数的局部变量
    
    function f2() // f2是f1函数的内部函数，是闭包
    {
        N += 1; // 内部函数f2中使用了外部函数f1中的变量N
        console.log(N);
    }

    return f2;
}

var result = f1();
var result2 = f1();

result(); // 输出1
result(); // 输出2
result2();
result(); // 输出3
result2();
