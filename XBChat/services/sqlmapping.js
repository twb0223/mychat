var user = {
    insert: 'insert into user(user_name,password,email) value (?,?,?)',
    update: 'update user set user_name=?,password=?,email=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from account where id=?',
    queryAll: 'select * from user',
    checkLogin:'select count(*) as num from account where accountID=? and password=?',
    queryByIdAndPwd:'select a.AccountID,a.Logo,a.AccountName,g.GroupName,g.ContainAccountIds FROM groups g left join account a on g.ParentAccountID=a.AccountID where a.AccountId=? and a.Password=? '
}

module.exports = user;