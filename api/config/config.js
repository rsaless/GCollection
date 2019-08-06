const env = process.env.NODE_ENV || 'dev';
const config = () => {
    switch (env){
        case 'dev': return {
            bd_string: 'mongodb+srv://rafael_admin:naopodeadmin123456@gcdb-axygf.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'senhadorafael',
            jwt_expires_in: '7d'
        }
        case 'hml': return {
            bd_string: 'mongodb+srv://rafael_admin:naopodeadmin123456@gcdb-axygf.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'senhadorafael',
            jwt_expires_in: '7d'

        }
        case 'prod': return {
            bd_string: 'mongodb+srv://rafael_admin:naopodeadmin123456@gcdb-axygf.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'senhadorafael',
            jwt_expires_in: '7d'

        }
    }
}

module.exports = config();